import request from '@/utils/request'

// 查询文章列表
export function getAllContentList() {
    return request({
        url: '/article/getList',
        method: 'GET'
    })
}

// 分页查询文章列表
export function getContentByPage(pageIndex, pageSize) {
    return request({
        url: '/article/getListByPage?pageIndex=' + pageIndex + '&pageSize=' + pageSize,
        method: 'GET'
    })
}

// 提交文章
export function submitArticle(data) {
    return request({
        url: '/article/save',
        method: 'POST',
        data: {
            title: data.title == undefined ? '' : data.title,
            content: data.content == undefined ? '' : data.content,
            summary: data.abstract == undefined ? '' : data.abstract
        }
    })
}

// 获得文章内容
export function getArticle(id) {
    return request({
        url: '/article/' + id,
        method: 'GET'
    })
}