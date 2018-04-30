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
