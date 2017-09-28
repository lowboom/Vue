import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Detail from "../components/detail.vue"
import NotPost from "../views/404.vue"

export default new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        /*{ path: '/:page(\\d+)?', component: Detail }*/
        { path: '/404', component: NotPost},
        //{ path: '/detail/:type', component: Detail }
        { path: '/:type', component: Detail }
        //{ path: '/academe/detail.html', component: Detail },
    ]
})
