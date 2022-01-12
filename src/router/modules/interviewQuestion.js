export default [
    {
        path: '/interview',
        name: 'interview',
        meta: { title: '面试题' },
        component: () => import('@/pages/interviewQuestion/index'),
        children: [
            {
                path: '/interview/ssh',
                name: 'ssh',
                component: () => import('@/pages/interviewQuestion/ssh'),
                meta: { title: 'ssh群' }
            }
        ]
    }
]
