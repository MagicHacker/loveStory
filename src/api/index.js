// 接口管理
import request from './request'

const api = {}

const login = (data) => {
    return request({
        url: api,
        method: 'GET',
        data,
    })
}

export {
    login
}