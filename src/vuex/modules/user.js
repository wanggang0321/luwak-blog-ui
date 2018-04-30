import {login} from '@/api/user'

const user = {
  state: {
    username: '',
    email: '',
    createAt: '',
    isLogin: false
  },
  actions: {
    //登录
    loginUser({commit}, data) {
      login(data.username, data.password).then(res => {
        commit('LOGIN_USER', res.data)
      })
    }
  },
  mutations: {
    LOGIN_USER: (state, data) => {
      state.username = data.username
      state.email = data.email
      state.createdAt = data.createTime
      state.isLogin = true
    },
    LOGIN_USER_FAILURE: (state) => {
      return state
    },
    LOGOUT_USER: (state) => {
      state.username = ''
      state.email = ''
      state.createdAt = ''
      state.isLogin = false
    }
  }
}

export default user
