import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Regist from '../components/Regist.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import UserInfo from '../components/UserInfo/UserInfo.vue'
import AllGarageInfo from '../components/goods/AllGarageInfo.vue'
import ClientList from '../components/admin/ClientList.vue'
import TempOut from '../components/client/TempOut.vue'
import AppliOut from '../components/client/AppliOut.vue'
import RenterInfo from '../components/client/RenterInfo.vue'
import SwitchOut from '../components/client/SwitchOut.vue'
import Record from '../components/client/Record.vue'
Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}


const routes = [

    // {
    //     path: '/',
    //     redirect: '/login'
    // },
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: Login,
        name: 'Login'
    },
    {
        path: '/regist',
        component: Regist,
        name: 'Regist'
    },
    {
        path: '/home',
        component: Home,
        redirect: '/allgarageinfo',
        meta: {
            authRequired: true
        },
        children: [{
                path: '/welcome',
                component: Welcome,
                name: 'Welcome'
            },
            {
                path: '/userInfo',
                component: UserInfo,
                name: 'UserInfo'
            },
            {
                path: '/allgarageinfo',
                component: AllGarageInfo,
                name: 'AllGarageInfo'
            }, {
                path: '/clientList',
                component: ClientList,
                name: 'ClientList'
            },
            {
                path: '/appliOut',
                component: AppliOut,
                name: 'AppliOut'
            },
            {
                path: '/renterInfo',
                component: RenterInfo,
                name: 'RenterInfo'
            },
            {
                path: '/tempOut',
                component: TempOut,
                name: 'TempOut'
            },
            {
                path: '/switchOut',
                component: SwitchOut,
                name: 'SwitchOut'
            },
            {
                path: '/record',
                component: Record,
                name: 'Record'
            }
        ]
    }
]

const router = new VueRouter({
    routes
})
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token')
    if (to.name !== 'Login' && !token && to.name !== 'Regist') next({
        name: 'Login'
    })

    else next()
})

export default router