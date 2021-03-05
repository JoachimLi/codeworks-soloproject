const { createUser, login, userDetails, updateUser } = require('./user.controller');
const { createFlight, getFlights } = require('./logbook.controller');

module.exports = {
  createUser,
  login,
  userDetails,
  updateUser,
  createFlight,
  getFlights,
};
