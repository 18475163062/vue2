import axios from 'axios'
import qs from 'qs'
//axios默认配置

axios.defaults.timeout=100000//超时时间

// 配置接口地址
axios.defaults.baseURL='http://192.168.0.140:7092'

// http request拦截器
axios.interceptors.request.use(
    config => {
        config.headers['Content-Type'] ='application/x-www-form-urlencoded'
        config.headers['X-Requested-With'] = 'XMLHttpRequest'
        config.headers['Access-Control-Allow-Origin'] = 'http://localhost:8080'
        return config
    },
    error=>{
        return Promise.reject(error.response)
    }
)

export default axios