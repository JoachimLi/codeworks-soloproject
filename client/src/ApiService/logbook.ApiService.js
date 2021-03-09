const axios = require('axios')

const BASE_URL = 'http://localhost:3000/logbook'

const getFlights = (userId) => {
  return post(userId, 'flights')
}

const setFlight = (flight) => {
  return post(flight, 'new-flight')
}

const post = (data, endpoint) => {
  return axios.post(`${BASE_URL}/${endpoint}`, data)
}

module.exports = {
  getFlights,
  setFlight
}
