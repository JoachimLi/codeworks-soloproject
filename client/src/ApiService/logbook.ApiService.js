const axios = require('axios')

const BASE_URL = 'http://localhost:3000/logbook'

const getFlights = (userId) => {
  // return axios.post(`${BASE_URL}/flights`, userId)
  return post(userId, 'flights')
}

const setFlight = (flight) => {
  // return axios.post(`${BASE_URL}/new-flight`, flight)
  return post(flight, 'new-flight')
}

const post = (data, endpoint) => {
  return axios.post(`${BASE_URL}/${endpoint}`, data)
}

module.exports = {
  getFlights,
  setFlight
}
