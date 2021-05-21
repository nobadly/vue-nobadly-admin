import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets
import './assets/styles/common.css'
import App from './App.vue'
import router from './router'
import store from './store'
import darg from '@/directive/el-dragDialog/index' // base on element-ui

import './utils/request'
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.use(ElementUI)
Vue.use(darg)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
