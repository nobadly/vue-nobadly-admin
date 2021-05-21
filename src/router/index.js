import Vue from 'vue'
import VueRouter from 'vue-router'
import { Message } from 'element-ui'
import { children } from './modules/index'
import util from '@/utils/util'
// 公共页面
const Layout = () => import('../views/layout/index.vue')

const Login = () => import('../views/Login/index.vue') // 登录页

Vue.use(VueRouter)

export const routes = [
    {
        path: '',
        name: 'Home',
        component: Layout,
        redirect: 'home',
        meta: {
            title: '首页'
        },
        children
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            title: '登录页'
        }
    }
]

const router = new VueRouter({
    routes
    // mode: 'history',
    // base: '/message/'
})
router.beforeEach((to, from, next) => {
    if (to.path !== '/login' && !util.getToken()) {
        Message.error('您当前未登录, 请先登录!')
        next('/login')
    } else {
        next()
    }
    // to and from are both route objects. must call `next`.
})
export default router
