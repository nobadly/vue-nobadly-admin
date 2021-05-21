const Home = () => import('../../views/home') // 首页

export const children = [
    {
        path: '/home',
        name: 'home',
        component: Home,
        meta: { title: '首页' }
    }
]

// 菜单数组
export const menuList = [
    {
        path: '/home',
        name: 'home',
        component: Home,
        meta: { title: '首页' }
    }
]
