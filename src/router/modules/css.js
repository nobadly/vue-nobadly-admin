export default [
  {
      path: '/css',
      name: 'css',
      meta: { title: 'CSS' },
      component: () => import('@/pages/css'),
      redirect: '/css/webSite',
      children: [
          {
              path: '/css/webSite',
              name: 'webSite',
              component: () => import('@/pages/css/webSite/index.vue'),
              meta: { title: 'css网站' }
          },
          {
              path: '/css/effects',
              name: 'effects',
              component: () => import('@/pages/css/cssEffects/index.vue'),
              meta: { title: 'css特效' }
          }
      ]
  }
]
