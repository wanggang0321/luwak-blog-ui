// import {
//   REQUEST_CONTENT_LIST,
//   GET_CONTENT_LIST,
//   GET_CONTENT_LIST_LENGTH,
//   GET_CONTENT_LIST_FAILURE,
//   POST_ARTICLE,
//   POST_ARTICLE_FAILURE
// } from '../mutation-types'

import {getContentByPage, getAllContentList} from '@/api/article'

const contentList = {
  state: {
    isFetching: false,
    curPage: 1,
    length: 1,
    contentList: []
  },
  actions: {
    // 分页查询首页列表
    getContentByPage({commit, state, dispatch}, page) {
      return new Promise((resolve, reject) => {
        getContentByPage(page, 1).then(res => {
          commit('GET_CONTENT_LIST', res.data.list)
        })
      })
    },
    // 查询列表
    getAllContentList({ commit }) {
      return new Promise((resolve, reject) => {
        getAllContentList().then(res => {
          // commit('GET_CONTENT_LIST', res.data)
          commit('GET_CONTENT_LIST_LENGTH', res.data.length)
        })
      })
    },
  },
  mutations: {
    REQUEST_CONTENT_LIST: (state, page) => {
      state.isFetching = true
      state.curPage = page || 1
    },
    GET_CONTENT_LIST: (state, items) => {
      state.isFetching = false
      state.contentList = items
    },
    GET_CONTENT_LIST_LENGTH: (state, length) => {
      state.length = length
    },
    GET_CONTENT_LIST_FAILURE: (state) => {
      state.isFetching = false
    },
    POST_ARTICLE: (state, data) => {
      state.contentList.push(data)
    },
    POST_ARTICLE_FAILURE: (state) => {
      return state
    }
  }
}

export default contentList;

// const state = {
//   isFetching: false,
//   curPage: Number,
//   length: Number,
//   contentList: []
// }
//
// const mutations = {
//   [REQUEST_CONTENT_LIST](state, page) {
//     state.isFetching = true
//     state.curPage = page || 1
//   },
//   [GET_CONTENT_LIST](state, items) {
//     state.isFetching = false
//     state.contentList = items
//   },
//   [GET_CONTENT_LIST_LENGTH](state, length) {
//     state.length = length
//   },
//   [GET_CONTENT_LIST_FAILURE](state) {
//     state.isFetching = false
//   },
//   [POST_ARTICLE](state, data) {
//     state.contentList.push(data)
//   },
//   [POST_ARTICLE_FAILURE](state) {
//     return state
//   }
// }
//
// export default {
//   state,
//   mutations
// }
