import axios from 'axios'
import Alert from 'component/Alert'
import history from "router/history";
import store from 'store/index'
import { setToken } from "actions/index";

// 配置开发和生产的请求接口
const service = axios.create({
    timeout: 10000
})

// 设置header请求头，发起请求前做的事情
service.interceptors.request.use(
    config => {      
        config.headers['Authorization'] = localStorage.getItem('token')
        config.headers['X-Requested-With'] = 'XMLHttpRequest'
        return config
    },
    error => {
        Promise.reject(error)
    },
)

// respone拦截器，发起请求后做的事情
service.interceptors.response.use(
    res => {
        // 当有新的token时自动更新新的token
        if (res.headers.authorization) {
            store().dispatch(setToken(res.headers.authorization));
            console.log('刷新token');
        }
        // 统一处理错误
        if (res.data.status == 'success') {
            return Promise.resolve(res.data)
        } else {
            Alert.show({
                type: 'error',
                message: res.data.message
            })
        }
        // 打印错误信息
        return Promise.reject(res.data)
    },
    error => {
        // if (error.response.status == 422) {
        //     Alert.show({
        //         type: 'error',
        //         message: error.response.data.message
        //     })
        //     history.push('/login');
        //     store().dispatch({
        //         type: 'set_token',
        //         data: null
        //     })
        //     localStorage.removeItem('token')
        //     return false
        // } else {
        //     Alert.show({
        //         type: 'error',
        //         message: error.response.status + error.response.data.message
        //     })
        // }
        // if (error.response.status == 401) {
        //     // 登录过期
        //     Notice.warning({
        //         title: '登录提示',
        //         desc: error.response.data.message,
        //         duration: 2,
        //         onClose() {
        //             store.dispatch("Logout");

        //         },
        //     });
        // } else if (error.response.status == 422) {
        //     // token过期
        //     Notice.warning({
        //         title: '温馨提示',
        //         desc: error.response.data.message,
        //         duration: 2,
        //     });
        // } else if (error.response.status == 403) {
        //     // 没有权限
        //     Notice.warning({
        //         title: '用户权限提示',
        //         desc: error.response.data.message,
        //         duration: 2,
        //         onClose() {
        //             store.dispatch("Logout");

        //         },
        //     });
        // } else if (error.response.status == 500) {
        //     // 服务器连接失败
        //     Notice.error({
        //         title: '网络提示',
        //         desc: '服务器连接失败，请稍后再试',
        //         duration: 2,
        //     });
        // } else {
        //     Notice.error({
        //         title: '错误提示 ' + error.response.status,
        //         desc: error.response.data.message,
        //         duration: 2,
        //     });
        // }
        return Promise.reject(error)
    },
)


export default service
