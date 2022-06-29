import VueRouter from "vue-router";

import home from '../components/home'
import order from '../components/order'
import login from '../components/login'
import register from '../components/register'
import detaile from '../components/detaile'

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes:[
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/home',
            component:home
        },
        {
            path:'/login',
            component:login
        },
        {
            path:'/order',
            name:'order',
            component:order
        },
        {
            path:'/register',
            component: register
        },
        {
            path:'/detaile/:good',
            name:'detaile',
            component: detaile,
            props: true
        }
    ]
})


router.beforeEach(function(to,from,next)  {
    if (to.path === '/order') {
        const token = localStorage.getItem('token')
        if (token) {
            next()
        } else {
            next('/login')
            alert("请先登录")
        }
    } else {
        next()
    }
})

export default router