// import * as types from './mutation-types'
// import * as article from  '@/api/article'
//
//
// export default {
//   // 获取文章列表, 现仅返回所有文章的数量
//   getAllContentList ({ commit }) {
//     commit(types.REQUEST_CONTENT_LIST)
//     article.getArticleList().then(res => {
//       commit(types.GET_CONTENT_LIST_LENGTH, res.data.length)
//       commit(types.GET_CONTENT_LIST, res.data)
//     })
//     .catch(error => {
//       commit(types.GET_CONTENT_LIST_FAILURE, error)
//     })
//   },
//   // 分页查询文章列表
//   getContentByPage ({commit}, page) {
//     commit(types.REQUEST_CONTENT_LIST, page)
//     article.getArticleListByPage(page).then(res => {
//       commit(types.GET_CONTENT_LIST, res.data)
//     })
//     .catch(error => {
//       commit(types.GET_CONTENT_LIST_FAILURE, error)
//     })
//   }
// }

const getters = {
  // article: state => state.article,
  contentList: state => state.contentList.contentList
}
export default getters
