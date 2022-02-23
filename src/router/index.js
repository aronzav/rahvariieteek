import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from "@/views/Login";
import Admin from "@/views/Admin";
import RoleSelection from "@/views/RoleSelection";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
            return import(/* webpackChunkName: "about" */ '../views/About.vue')
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: login
    },
    {
       path: '/role/selection',
        name: "RoleSelection",
        component: RoleSelection
    },
    {
        path: '/admin',
        name: 'Admin',
        component: Admin
    },
    {
        path: '/user',
        name: 'User',
        component: Home
    },
    {
        path: '/inventory',
        name: 'Inventory',
        component: Home
    },
    {
        path: '/transaction',
        name: 'Transaction',
        component: Home
    }

]

const router = new VueRouter({
    routes
})

export default router
