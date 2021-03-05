const { Flight, User } = require('../models');

const createFlight = async (ctx) => {
  const flight = new Flight({...ctx.request.body});
  try {
    const user = await User.findById(flight.userId);
    const newFlight = await flight.save();
    user.flights.push(newFlight._id.toString());    // newflight._id is of type ObjectId => needs to be of type String
    await user.save();                              // add flight to this users flights array
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
