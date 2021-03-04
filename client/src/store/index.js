import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null
  },

  mutations: {
    SET_USER (state, user) {
      state.user = user
    }
  },

  actions: {
    setUser ({ commit }, user) {
      commit('SET_USER', user)
    }
  },

  modules: {
  }
})
