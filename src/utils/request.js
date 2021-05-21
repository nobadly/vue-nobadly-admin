import Vue from 'vue'
import axios from 'axios'
import util from './util'
// axios全局配置
Vue.prototype.$axios = axios
axios.defaults.timeout = 20000 * 3
axios.defaults.withCredentials = true
// axios.defaults.baseURL = '/api/'
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8;'
var ajaxElVm = null
var ajaxTimeout = null
const iconClass = 'el-icon-loading'
const customClass = 'el-notify--ajax'
const background = 'rgba(0,0,0, 0.3)'
const position = 'bottom-right'

// 输入拦截
axios.interceptors.request.use(config => {
    config.headers.post.Authorization = 'Bearer ' + util.getToken()
    config.headers.get.Authorization = 'Bearer ' + util.getToken()
    config.headers['X-Requested-With'] = 'XMLHttpRequest'
    config.headers = {
        'Content-Type': 'application/json' // 设置很关键
      }
    if (ajaxElVm) {
        ajaxElVm.close()
        clearTimeout(ajaxTimeout)
    }

    ajaxElVm = Vue.prototype.$notify({
        lock: true,
        duration: 2000,
        message: '数据请求中...',
        iconClass: iconClass,
        customClass: customClass,
        background: background,
        position: position
    })
    return config
})

// 输出拦截
axios.interceptors.response.use((response) => {
    if (ajaxElVm) {
        ajaxTimeout = setTimeout(() => ajaxElVm.close(), 1000)
    }
    // Vue.prototype.$notify.closeAll();

    if (response.status !== 200) {
        // Vue.prototype.$message.error('服务器请求错误')
        Vue.prototype.$notify({
            lock: true,
            duration: 2000,
            message: '服务器请求错误',
            iconClass: iconClass,
            customClass: customClass,
            background: background,
            position: position
        })
    } else {
        var data = response.data
        if (data.errcode === 200) {
            // Vue.prototype.$message.error(data.errmsg)
            Vue.prototype.$notify({
                lock: true,
                duration: 2000,
                message: data.errmsg,
                iconClass: iconClass,
                customClass: customClass,
                background: background,
                position: position
            })
            return response.data.data
        } else {
            return response
        }
    }
    const err = (data && data.errmsg) || ''
    return Promise.reject(err)
}, function (error) {
    if (ajaxElVm) {
        ajaxTimeout = setTimeout(() => ajaxElVm.close(), 1000)
    }
    console.log(error, 'error')
    if (error.response.data && error.response.data.status === 403) {
        Vue.prototype.$message.error('登录超时')
        // util.setToken('')
        // store.commit('_setToken', '')
        // router.push({ path: '/Login' })
    } else if (error.response.status === 401) {
        Vue.prototype.$message.error(error.response.message ? error.response.message : '权限不足，无法访问资源')
    } else {
        Vue.prototype.$notify({
            lock: true,
            duration: 2000,
            message: '服务器请求错误',
            iconClass: iconClass,
            customClass: customClass,
            background: background,
            position: position
        })
    }

    return Promise.reject(error)
})

// get 请求
export const httpGET = (url, params = {}) => {
    const option = {
        url,
        method: 'get',
        params
    }
    return axios(option)
}

// post 请求
export const httpPOST = (url, params) => {
    return axios({
        url,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify(params)
    })
}
// post 请求
export const httpQueryPOST = (url, params) => {
    return axios.post(url, {}, { params })
}

// axios 全局配置
axios.defaults.timeout = 20000

const httpPlugin = {
    install (Vue) {
        // get、post请求
        Vue.prototype.$GET = httpGET
        Vue.prototype.$POST = httpPOST
        Vue.prototype.$QueryPOST = httpQueryPOST
    }
}

Vue.use(httpPlugin)
