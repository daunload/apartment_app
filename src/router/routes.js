import MainView from '@/router/views/MainView'
import ListView from '@/router/views/ListView'

const routes = [
    {
        path: '/',
        name: 'Main',
        component: MainView
    },
    {
        path: '/ListView', 
        name: 'ListView',
        component: ListView
    }
]

export default routes