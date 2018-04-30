// import * as types from '../mutation-types'
import {submitArticle, getArticle} from '@/api/article'

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
        // 发布文章
        submitArticle({commit}, data) {
            submitArticle(data).then(res => {
                // commit('POST_ARTICLE')
            })
        },
        // 根据ID查询文章内容
        getArticle({commit}, id) {
            getArticle(id).then(res => {
                commit('GET_ARTICLE', res.data)
            })
        },
        // 清除文章
        clearArticle({commit}) {
            commit('CLEAR_ARTICLE')
        },
    },
    mutations: {
        CLEAR_ARTICLE: (state) => {
            state.content = ''
            state.title = ''
            state.cover = ''
            state.createdAt = ''
            state.loading = true
        },
        GET_ARTICLE: (state, data) => {
            state.content = data.content
            state.title = data.title
            state.createdAt = data.createTime
            state.cover = data.cover
            state.loading = false
        }
    }
}
export default article
