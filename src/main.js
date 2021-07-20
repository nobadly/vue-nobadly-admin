import Vue from 'vue'

import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css/normalize.css'// A modern alternative to CSS resets
import './assets/styles/common.css'
import App from './App.vue'
import router from './router'
import store from './store'

import './utils/request'
import * as echarts from 'echarts'
import { plugins } from '@/plugins/index.js'
Vue.prototype.$echarts = echarts

plugins.forEach(plugin => {
  Vue.use(plugin)
})
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
