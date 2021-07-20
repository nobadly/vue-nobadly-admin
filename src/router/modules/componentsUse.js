
export default [
    {
        path: '/components',
        name: 'components',
        meta: { title: '组件' },
        component: () => import('@/pages/componentsUse'),
        children: [
            {
                path: '/components/scrollNum',
                name: 'scrollNum',
                component: () => import('@/pages/componentsUse/scrollNum'),
                meta: { title: '数字滚动' }
            }
        ]
    }
]
