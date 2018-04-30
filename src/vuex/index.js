import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
// modules
import article from './modules/article'
import contentList from './modules/contentList'
import user from './modules/user'


// 非生产环境下开启严格模式，用以检测是否有在 mutation 外改变 store
// const debug = process.env.NODE_ENV !== 'production'

// export default new Vuex.Store({
//   strict: debug,
//   getters,
//   modules: {
//     article
//   },
//   // plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : []
// })

Vue.use(Vuex)
const store = new Vuex.Store({
    modules: {
        article,
        contentList,
        user
    },
    getters
})

export default store
