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
    }
  },

  actions: {
    setUser ({ commit }, user) {
      commit('SET_USER', user)
    },

    addCategories ({ commit }, categories) {
      commit('SET_CATEGORIES', categories)
      console.log('user.categoriesToTrack', this.state.user.categoriesToTrack)
    }
  },

  modules: {
  }
})
