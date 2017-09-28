# ssr-demo

[vue-hackernews-2.0](https://github.com/vuejs/vue-hackernews-2.0)'s demo

1. del /user , /item
2. api on server.js(express)
3. more see : [my-blog](http://blog.zeromake.com/pages/vue-ssr)

## Install
``` shell
$npm i
```

## Run dev
``` shell
$npm run dev
# open browser http://127.0.0.1:8090
```

## Run
``` shell
$npm run build
$npm run start
# open browser http://127.0.0.1:8090
```

## Run server
install nodejs,npm
``` shell
$npm i
$npm run build
$npm run start:pm2
```
端口在`pm.json`改
nginx 反代
