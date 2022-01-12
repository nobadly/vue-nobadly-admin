
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
            },
            {
                path: '/components/scratchTicket',
                name: 'scratchTicket',
                component: () => import('@/pages/componentsUse/scratchTicket'),
                meta: { title: '刮刮乐' }
            },
            {
                path: '/components/drawDragon',
                name: 'scratchTicket',
                component: () => import('@/pages/componentsUse/drawDragon'),
                meta: { title: '画龙' }
            },
            {
                path: '/components/fcWaveFilter',
                name: 'fcWaveFilter',
                component: () => import('@/pages/componentsUse/fcWaveFilter'),
                meta: { title: 'fcWaveFilter波浪线' }
            }
        ]
    }
]
