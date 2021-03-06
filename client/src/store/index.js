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

    SET_FLIGHTS (state, flts) {
      if (!state.flights) state.flights = flts
      else {
        const flightsArray = [...state.flights, ...flts]
        state.flights = flightsArray
      }
    },

    RESET_FLIGHTS (state) {
      state.flights = null
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

    setFlights ({ commit }, flts) {
      commit('SET_FLIGHTS', flts)
    },

    resetFlights ({ commit }) {
      commit('RESET_FLIGHTS')
    }
  },

  modules: {
  }
})
