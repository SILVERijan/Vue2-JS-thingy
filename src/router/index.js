import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/tasks',
        name: 'Tasks',
        // route level code-splitting
        // this generates a separate chunk for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "tasks" */ '../views/TasksView.vue'),
        children: [
            {
                path: 'nested',
                name: 'NestedTasks',
                component: () => import(/* webpackChunkName: "nested" */ '../components/NestedExample.vue')
            }
        ]
    },
    {
        path: '/advanced',
        name: 'Advanced',
        component: () => import(/* webpackChunkName: "advanced" */ '../views/AdvancedView.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
