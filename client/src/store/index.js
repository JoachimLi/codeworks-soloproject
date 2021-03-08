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
      if (!state.flights) { // if flights array does not exist yet
        state.flights = flts
      } else { // if it does exist, add new flight(s)
        const flightsArr = [...state.flights, ...flts]
        state.flights = flightsArr
      }
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
      // sort flights descending by date
      flts.sort((a, b) => {
        if (a.date < b.date) return 1
        if (a.date > b.date) return -1
        return 0
      })
      commit('SET_FLIGHTS', flts)
    }
  },

  modules: {
  }
})
