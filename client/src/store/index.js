import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null,
    flights: null
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
    },

    SET_FLIGHTS (state, flights) {
      state.flights ? state.flights.concat(flights) : state.flights = flights
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
    },

    setFligths ({ commit }, flights) {
      commit('SET_FLIGHTS', flights)
    }
  },

  modules: {
  }
})
