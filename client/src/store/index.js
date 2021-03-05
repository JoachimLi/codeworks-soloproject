import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null
  },

  mutations: {
    SET_USER (state, user) {
      state.user = user
    },

    SET_CATEGORIES (state, categories) {
      state.user.categoriesToTrack = categories
    },

    REMOVE_USER (state) {
      state.user = null
    }
  },

  actions: {
    setUser ({ commit }, user) {
      commit('SET_USER', user)
    },

    addCategories ({ commit }, categories) {
      commit('SET_CATEGORIES', categories)
    },

    removeUser ({ commit }) {
      commit('REMOVE_USER')
    }
  },

  modules: {
  }
})
