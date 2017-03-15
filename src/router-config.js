import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './views/first-page.vue'
import Second from './views/second-page.vue'
//1.开始使用Router
Vue.use(VueRouter)

//2.配置路由
const route = new VueRouter({
    routes: [
        { path: '/index', component: Index }, //首页
        { path: '/second', component: Second }, //登录
        { path: '*', redirect: '/index' } //默认访问首页
    ],
    scrollBehavior(to, from, savedPosition) { //退回上次页面滚动到的位置
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})

export default route
