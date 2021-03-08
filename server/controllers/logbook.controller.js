const { Flight, User } = require('../models');

const createFlight = async (ctx) => {
  const flight = new Flight({...ctx.request.body});

  flight.blockTime = total(flight.offBlock, flight.onBlock);
  flight.flightTime = total(flight.takeOff, flight.landing);
  
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
    const { flights } = await User.findById(userId);    // get flights array from user object
    const flightDetails = [];
    for ( const id of flights) {
      const flight = await Flight.findById(id);         // for each flight id in flights array, get flight object from api
      flightDetails.push(flight);
    }
    ctx.status = 200;
    ctx.body = flightDetails;
  } catch (error) {
    ctx.status = 500;
    ctx.body = error;
  }
};

// HELPER
const total = (start, end) => {
  let correction = 0;
  const hrs = (end / 100 | 0) - (start / 100 | 0);

  const mins = (() => {
    const startMins = start % 100;
    const endMins = end % 100;

    if (startMins <= endMins) return endMins - startMins;
    else {
      correction = 1;
      return endMins + 60 - startMins;
    }
  })();
  
  return `${hrs - correction}:${mins}`;
};


module.exports = { createFlight, getFlights };
