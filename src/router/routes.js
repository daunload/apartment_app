const routes = [
    {
        path: '/',
        name: 'Main',
        component: () => import('@/router/layouts/DefaultLayout'),
        children: [
            {
                path: '/',
                name: 'home',
                component: ()=> import('@/router/views/MainView'),
            },
            {
                path: '/list',
                name: 'list',
                component: ()=> import('@/router/views/ListView'),
            },
        ]
    },
]

export default routes