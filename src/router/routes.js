const routes = [
    {
        path: '/', 
        components: () => import('./views/MainView')
    },
    {
        path: '/ListView', 
        components: () => import('./views/ListView')
    }
]

export default routes