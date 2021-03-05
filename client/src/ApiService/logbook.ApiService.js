const axios = require('axios')

const BASE_URL = 'http://localhost:3000/logbook'

const getFlights = (userId) => {
  return axios.post(`${BASE_URL}/flights`, userId)
}

module.exports = {
  getFlights
}
