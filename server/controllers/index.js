const { createUser, login } = require('./user.controller');
const { createFlight } = require('./flight.controller');

module.exports = {
  createUser,
  login,
  createFlight,
};
