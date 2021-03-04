const { createUser, login, userDetails } = require('./user.controller');
const { createFlight, getFlights } = require('./logbook.controller');

module.exports = {
  createUser,
  login,
  userDetails,
  createFlight,
  getFlights,
};
