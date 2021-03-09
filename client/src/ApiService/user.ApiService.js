const axios = require('axios')

const BASE_URL = 'http://localhost:3000/user'

const registerUser = (user) => {
  return post(user, 'register')
}

const authenticateUser = (user) => {
  return post(user, 'login')
}

const getUserDetails = (userId) => {
  return post(userId, 'details')
}

const updateUser = (newUserInfo) => {
  return post(newUserInfo, 'update')
}

// HELPER
const post = (data, endpoint) => {
  return axios.post(`${BASE_URL}/${endpoint}`, data)
}

module.exports = {
  registerUser,
  authenticateUser,
  getUserDetails,
  updateUser
}
