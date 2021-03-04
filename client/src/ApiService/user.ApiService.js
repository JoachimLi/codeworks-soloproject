const axios = require('axios')

const BASE_URL = 'http://localhost:3000'

const registerUser = async (user) => {
  try {
    return await axios.post(`${BASE_URL}/user/register`, user)
  } catch (error) {
    console.log('error', error)
  }
}

module.exports = {
  registerUser
}
