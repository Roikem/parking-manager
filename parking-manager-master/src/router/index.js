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
        redirect: '/login'
    },
    {
        path: '/login',
        component: Login,
        name:'Login'
    },
    {
        path: '/regist',
        component: Regist,
        name:'Regist'
    },
    {
        path: '/home',
        component: Home,
        redirect: '/allgarageinfo',
        meta:{authRequired:true},
        children: [{
                path: '/welcome',
                component: Welcome,
                name:'Welcome'
            },
            {
                path: '/userInfo',
                component: UserInfo,
                name:'UserInfo'
            },
            {
                path: '/allgarageinfo',
                component: AllGarageInfo,
                name:'AllGarageInfo'
            },
            {
                path: '/outInfo',
                component: OutInfo,
                name:'OutInfo'
            }, {
                path: '/clientList',
                component: ClientList,
                name:'ClientList'
            },
            {
                path: '/clientAppli',
                component: ClientAppli,
                name:'ClientAppli'
            },
            {
                path: '/allGoodsInfo',
                component: AllGoodsInfo,
                name:'AllGoodsInfo'

            },
            {
                path: '/appliOut',
                component: AppliOut,
                name:'AppliOut'
            },
            {
                path: '/renterInfo',
                component: RenterInfo,
                name:'RenterInfo'
            },
            {
                path: '/tempOut',
                component:TempOut,
                name:'TempOut'
            },
            {
                path: '/switchOut',
                component:SwitchOut,
                name:'SwitchOut'
            },
            {
                path: '/record',
                component:Record,
                name:'Record'
            }
        ]
    }
]

const router = new VueRouter({
    routes
})
router.beforeEach((to, from, next)=>{
    const token =localStorage.getItem('token')
    if(to.name!=='Login'&&!token) next({name:'Login'})
    else next()
})

export default router