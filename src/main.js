import Vue from 'vue';
import App from './App.vue'
import route from './router-config'
import 'mint-ui/lib/style.css'
import Mint from 'mint-ui';
Vue.use(Mint);
new Vue({
    el: '#app',
    router: route,
    render: h => h(App) // 渲染APP挂载到#app
})