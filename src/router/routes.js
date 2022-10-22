const routes = [
    {
        path: '/',
        name: 'defaultLayout',
        component: () => import('@/router/layouts/DefaultLayout'),
        children: [
            {
                path: '/',
                name: 'home',
                component: ()=> import('@/router/views/MainView'),
            },
            {
                path: '/listView',
                name: 'list',
                component: ()=> import('@/router/views/ListView'),
            },
        ]
    },
]

export default routes