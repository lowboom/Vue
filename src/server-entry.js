import { app, router, store } from './app'

const isDev = process.env.NODE_ENV !== 'prodution'

export default context => {

    const s = isDev && Date.now()
    router.push(context.url)
    return new Promise((res, reject) => {
        router.onReady(() => {
            const matchedComponents = router.getMatchedComponents()

            if (!matchedComponents.length) {
                /*reject({ code: '404' })*/
                return Promise.reject({ code: '404' })
            }

            Promise.all(matchedComponents.map(component => {
                if (component.preFetch){
                    return component.preFetch(store, router.currentRoute)
                }
            })).then(() => {
                isDev && console.log(`data pre-fetch: ${Date.now() - s}ms`)
                context.initialState = store.state
                res(app)
            })
        })
    })

}
