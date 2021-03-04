const axios = require('axios')

const BASE_URL = 'http://localhost:3000'

const registerUser = (user) => {
  return axios.post(`${BASE_URL}/user/register`, user)
}

module.exports = {
  registerUser
}
