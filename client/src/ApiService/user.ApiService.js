const axios = require('axios')

const BASE_URL = 'http://localhost:3000/user'

const registerUser = (user) => {
  return axios.post(`${BASE_URL}/register`, user)
}

const authenticateUser = (user) => {
  return axios.post(`${BASE_URL}/login`, user)
}

const getUserDetails = (userId) => {
  return axios.post(`${BASE_URL}/details`, userId)
}

module.exports = {
  registerUser,
  authenticateUser,
  getUserDetails
}
