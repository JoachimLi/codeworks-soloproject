const { User } = require('../models');

const createUser = async (ctx) => {
  const user = new User({...ctx.request.body});
  try {
    await user.save();
    ctx.status = 201;
    ctx.body = user;
  } catch (error) {
    console.log('The following error occured while registering a new user:', error);
    ctx.status = 500;
    ctx.body = error;
  }
};

module.exports = { createUser };
