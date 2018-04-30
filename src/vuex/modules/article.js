// import * as types from '../mutation-types'
// import {getContentByPage} from '@/src/api/article'

// const state = {
//   content: '',
//   title: '',
//   cover: '',
//   createdAt: '',
//   loading: true
// }
//
// const mutations = {
//   [GET_ARTICLE](state, data) {
//     state.content = data.content
//     state.title = data.title
//     state.createdAt = data.createdAt
//     state.cover = data.cover
//     state.loading = false
//   },
//   [GET_ARTICLE_FAILURE](state) {
//     return state
//   },
//   [CLEAR_ARTICLE](state) {
//     state.content = ''
//     state.title = ''
//     state.cover = ''
//     state.createdAt = ''
//     state.loading = true
//   }
// }
//
// export default {
//   state,
//   mutations
// }
const article = {
  state: {
    content: '',
    title: '',
    cover: '',
    createdAt: '',
    loading: true
  },
  actions: {
    // // 获取文章列表
    // getArticleByPage({commit, state, dispatch}, page) {
    //   return new Promise((resolve, reject) => {
    //     getArticleByPage().then(res => {
    //       const data = res.data
    //       commit('GET_CONTENT_LIST', res.data)
    //     })
    //   })
    // }
  },
  mutations: {
    // GET_A_LIST: (state, data) => {
    //   state.content = data.articleList
    // }
  }
}
export default article
