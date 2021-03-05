const axios = require('axios')

const BASE_URL = 'http://localhost:3000/logbook'

const getFlights = (userId) => {
  return axios.post(`${BASE_URL}/flights`, userId)
}

const setFlight = (flight) => {
  return axios.post(`${BASE_URL}/new-flight`, flight)
}

module.exports = {
  getFlights,
  setFlight
}
