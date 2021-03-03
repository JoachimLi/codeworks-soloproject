const { Flight } = require('../models');

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

module.exports = { createFlight };
