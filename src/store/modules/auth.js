import { login, register, logout, loadCurrentUser } from '@/api/auth.api'

const state = {
  user: null,
  user_id: null
}

const getters = {
  userId: () => state.user_id
}

const mutations = {
  SET_USER: (state, payload) => {
    state.user = Object.assign({}, payload)
  },
  SET_USER_ID: (state, payload) => {
    state.user_id = payload
  }
}

const actions = {
  signIn ({ commit }, payload) {
    return login(payload).then((res) => {
      localStorage.setItem('token', res.token)
      return res
    }).catch((err) => {
      return err
    })
  },

  signUp ({ commit }, payload) {
    return register(payload).then((res) => {
      console.log(res)
    }).catch((err) => {
      return err
    })
  },

  signOut ({ commit }) {
    return logout().then((res) => {
      localStorage.removeItem('token')
      return res
    }).catch((err) => {
      return err
    })
  },

  async loadCurrentUser ({ commit }) {
    return loadCurrentUser().then((res) => {
      commit('SET_USER', res)
      return res
    }).catch((err) => {
      return err
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
