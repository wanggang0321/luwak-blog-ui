import request from '@/utils/request'

// 提交评论
export function submitComment(data) {
  return request({
    url: '/comment/save',
    method: 'POST',
    data: {
      articleId: data.articleId,
      username: data.name,
      content: data.content,
    }
  })
}

// 根据文章ID查询评论列表
export function getCommentsList(id) {
  return request({
    url: '/comment/getList/' + id,
    method: 'GET',
  })
}
