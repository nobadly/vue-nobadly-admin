const Home = () => import('@/views/home') // 首页

export default [
    {
        path: '/home',
        name: 'home',
        component: Home,
        meta: { title: 'home' }
    }
]
