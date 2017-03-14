import Vue from 'vue'
import App from './App.vue'
import route from './router-config'

new Vue({
    el: '#app',
    router: route,
    render: h => h(App) // 渲染APP挂载到#app
})