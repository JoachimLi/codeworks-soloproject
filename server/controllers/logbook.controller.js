const { Flight, User } = require('../models');

const createFlight = async (ctx) => {
  const flight = new Flight({...ctx.request.body});
  try {
    await flight.save();
    ctx.status = 201;
    ctx.body = flight;
  } catch (error) {
    console.log('The following error occured while logging a new flight:', error);
    ctx.status = 500;
    ctx.body = error;
  }
};

const getFlights = async (ctx) => {
  const { userId } = ctx.request.body;
  try {
    const { flights } = await User.findById(userId);
    const flightDetails = [];
    for ( const id of flights) {
      const flight = await Flight.findById(id);
      flightDetails.push(flight);
    }
    ctx.status = 200;
    ctx.body = flightDetails;
  } catch (error) {
    ctx.status = 500;
    ctx.body = error;
  }
};

module.exports = { createFlight, getFlights };
