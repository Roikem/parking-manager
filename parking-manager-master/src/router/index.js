import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Regist from '../components/Regist.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'

import UserInfo from '../components/UserInfo/UserInfo.vue'

import AllGarageInfo from '../components/goods/AllGarageInfo.vue'

import AddInfo from '../components/admin/AddInfo.vue'
import OutInfo from '../components/admin/OutInfo.vue'
import ClientList from '../components/admin/ClientList.vue'
import ClientAppli from '../components/admin/ClientAppli.vue'
import AllGoodsInfo from '../components/admin/AllGoodsInfo.vue'
import TempOut from '../components/client/TempOut.vue'
import AppliOut from '../components/client/AppliOut.vue'
import RenterInfo from '../components/client/RenterInfo.vue'
import SwitchOut from '../components/client/SwitchOut.vue'
import Record from '../components/client/Record.vue'
Vue.use(VueRouter)

const routes = [

    // {
    //     path: '/',
    //     redirect: '/login'
    // },
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/regist',
        component: Regist
    },
    {
        path: '/home',
        component: Home,
        redirect: '/allgarageinfo',
        children: [{
                path: '/welcome',
                component: Welcome
            },
            {
                path: '/userInfo',
                component: UserInfo
            },
            {
                path: '/allgarageinfo',
                component: AllGarageInfo
            },
            {
                path: '/outInfo',
                component: OutInfo
            }, {
                path: '/clientList',
                component: ClientList
            },
            {
                path: '/clientAppli',
                component: ClientAppli
            },
            {
                path: '/allGoodsInfo',
                component: AllGoodsInfo

            },
            {
                path: '/appliOut',
                component: AppliOut
            },
            {
                path: '/renterInfo',
                component: RenterInfo
            },
            {
                path: '/tempOut',
                component:TempOut
            },
            {
                path: '/switchOut',
                component:SwitchOut
            },
            {
                path: '/record',
                component:Record
            }
        ]
    }
]

const router = new VueRouter({
    routes
})

// 避免重复选择控制台报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

export default router