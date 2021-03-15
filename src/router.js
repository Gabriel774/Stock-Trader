import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            component: Home
        },
        {
            path: '/portfolio',
            component: () => import('./components/Portfolio')
        },
        {
            path: '/stocks',
            component: () => import('./components/Stocks')
        },
    ]
})