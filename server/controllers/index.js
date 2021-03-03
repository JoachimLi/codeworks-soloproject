const { createUser, login } = require('./user.controller');
const { createFlight, getFlights } = require('./logbook.controller');

module.exports = {
  createUser,
  login,
  createFlight,
  getFlights,
};
