import request from '@/utils/request'


// 查询主页背景图片
export function getImgUrl() {
    return request({
        url: '/image/getList/background',
        method: 'GET'
    })
}

//登录
export function login(username, password) {
    return request({
        url: '/user/login',
        data: {
            username: username,
            password: password
        },
        method: 'POST'
    })
}
