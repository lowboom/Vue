const fs = require('fs')
const path = require('path')
const express = require('express')
const favicon = require('serve-favicon')
const compression = require('compression')
const serialize = require('serialize-javascript')

const resolve = file => path.resolve(__dirname, file)

const isProd = process.env.NODE_ENV === 'production'
const serverInfo = `express/${require('express/package.json').version}` +
    `vue-server-renderer/${require('vue-server-renderer/package.json').version}`

const app = express()
let nowRes
process.on('unhandledRejection', function(error) {
    if (nowRes && error.code === "404") {
        nowRes.status(404).end('404 | Page Not Found')
    }
})

let indexHTML
let renderer
if (isProd) {
    renderer = createRenderer(fs.readFileSync(resolve('./dist/server-bundle.js'), 'utf-8'))
    indexHTML = parseIndex(fs.readFileSync(resolve('./dist/index.html'), 'utf-8'))
} else {
    require('./build/setup-dev-server')(app, {
        bundleUpdated: bundle => {
            renderer = createRenderer(bundle)
        },
        indexUpdated: index => {
            indexHTML = parseIndex(index)
        }
    })
}

function createRenderer (bundle) {
    return require('vue-server-renderer').createBundleRenderer(bundle, {
        cache: require('lru-cache')({
            max: 1000,
            maxAge: 1000 * 60 * 15
        })
    })
}

function parseIndex (template) {
    const contentMarker = '<!-- APP -->'
    const i = template.indexOf(contentMarker)
    return {
        head: template.slice(0, i),
        tail: template.slice(i + contentMarker.length)
    }
}

const serve = (path, cache) => express.static(resolve(path), {
    maxAge: cache && isProd ? 60 * 60 * 24 * 30 : 0
})
// 加载和设置static
app.use(compression({ threshold: 0}))
app.use(favicon('./public/logo-48.png'))
app.use('/service-worker.js', serve('./servivce-worker.js'))
app.use('/dist', serve('./dist'))
app.use('/public', serve('./public'))


// historyApiFallback and ssr
app.get('*', (req, res) => {
    nowRes = res
    if (!renderer) {
        return res.end('waiting for compilation.. refresh in a moment.')
    }
    res.setHeader("Context-Type", "text/html")
    res.setHeader("Server", serverInfo)
    const s = Date.now()
    const context = { url: req.url }
    const renderStream = renderer.renderToStream(context)
    renderStream.once('data', () => {
        res.write(indexHTML.head)
    })
    renderStream.on('data', chunk => {
        res.write(chunk)
    })
    renderStream.on('end', () => {
        if (context.initialState) {
            res.write(
                `<script>window.__INSTAL_STATE__=${
                    serialize(context.initialState)
                }</script>`
            )
        }
        res.end(indexHTML.tail)
        console.log(`whole request: ${Date.now() - s}ms`)
    })
    renderStream.on('error', err => {
        if (err && err.code === '404') {
            res.status(404).end('404 | Page Not Found')
            return
        }
        res.status(500).end('Internal Error 500')
        console.error(`error during render : ${req.url}`)
        console.error(err)
    })
})

const port = process.env.PORT || 9000 // 端口
app.listen(port, "0.0.0.0", () => {
    console.log(`server started at localhost:${port}`)
})
