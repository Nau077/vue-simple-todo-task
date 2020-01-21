import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/pages/Main';
import Tasks from '@/pages/Tasks';
import About from '@/pages/About';

Vue.use(VueRouter)

const routes = [
        {
            path: '/',
            name: 'Main',
            component: Main
        },
        {
            path: '/Tasks',
            name: 'Tasks',
            component: Tasks
        },
        {
            path: '/About',
            name: 'About',
            component: About
        }
]

const router = new VueRouter({
  routes
})

export default router
