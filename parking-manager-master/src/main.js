import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import qs from 'qs'
import * as echarts from 'echarts/lib/echarts.js'
// 导入全局样式表
import './assets/css/global.css'
import {
    GridComponent
} from 'echarts/components';
import {
    TitleComponent
} from 'echarts/components';
import axios from 'axios'
import md5 from 'js-md5';
Vue.prototype.$echarts = echarts;
Vue.prototype.$http = axios
Vue.prototype.$md5 = md5;
Vue.prototype.$qs = qs;
// natapp接口前缀
Vue.prototype.api = 'http://120.24.39.39:8080/'
axios.defaults.baseURL = '/api'

//添加请求拦截器
axios.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token')
        if (token) config.headers.token = token;
        return config;
    },
    (error) => Promise.reject(error),
)

//http reponse响应拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    localStorage.removeItem('token');
                    router.push({
                        name: 'Login'
                    })
                    return Promise.reject(error)
            }
        }
    })
import VueParticles from 'vue-particles'
Vue.use(VueParticles)

echarts.use([TitleComponent]);
echarts.use([GridComponent]);
Vue.prototype.personInfo = {
    userName: 'sd',
    userSex: '',
    isManager: '1',
    userTel: '',
    company: '',
    userAccount: '',
    userId: ''
}
Vue.prototype.openLoading = function () {
    const loading = this.$loading({ // 声明一个loading对象
        lock: true, // 是否锁屏
        text: '正在加载...', // 加载动画的文字
        spinner: 'el-icon-loading', // 引入的loading图标
        background: 'rgba(0, 0, 0, 0.3)', // 背景颜色
        target: '.sub-main', // 需要遮罩的区域
        body: true,
        customClass: 'mask' // 遮罩层新增类名
    })
    setTimeout(function () { // 设定定时器，超时5S后自动关闭遮罩层，避免请求失败时，遮罩层一直存在的问题

        loading.close(); // 关闭遮罩层
    }, 3000)
    return loading;
}


//axios.defaults.baseURL = 'http://120.24.39.39:8080/'

Vue.config.productionTip = false





new Vue({
    router,
    render: h => h(App)
}).$mount('#app')