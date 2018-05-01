import {submitComment, getCommentsList} from '@/api/comment'

const commentList = {
  state: {
    commentList: []
  },
  actions: {
    // 提交评论
    submitComment({commit}, data) {
      submitComment(data).then(res => {
        commit('SUBMIT_COMMENT', res.data)
      })
    },
    // 根据文章ID查询评论列表
    getCommentsList({commit}, articleId) {
      getCommentsList(articleId).then(res => {
        commit('GET_COMMENTS_LIST', res.data)
      })
    }
  },
  mutations: {
    SUBMIT_COMMENT: (state, data) => {
      state.commentList.push(data)
    },
    GET_COMMENTS_LIST: (state, data) => {
      state.commentList = data
    }
  }
}

export default commentList
