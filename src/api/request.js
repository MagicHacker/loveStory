// axios封装

import { axios } from 'taro-axios'

const instance = axios.create({
    baseURL: '',
    timeout: 10000
})

// 请求拦截器
instance.interceptors.request.use(config => {
    config.headers = {}
    return config
})

// 响应拦截器
instance.interceptors.response.use(response => {
    return response
})

export default instance;