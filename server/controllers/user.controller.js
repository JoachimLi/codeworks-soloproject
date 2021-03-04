const { User } = require('../models');

const createUser = async (ctx) => {
  const user = new User({...ctx.request.body});
  try {
    await user.save();
    ctx.status = 201;
    ctx.body = {
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName
    };
  } catch (error) {
    console.log('The following error occured while registering a new user:', error);
    ctx.status = 500;
    ctx.body = error;
  }
};

const login = async (ctx) => {
  const { email, password } = ctx.request.body;
  console.log('email', email);
  console.log('password', password);
  try {
    const user = await User.findOne({ email: email });
    console.log('user', user);
    ctx.status = 200;
    ctx.body = {
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName
    };
  } catch (error) {
    ctx.status = 401;
  }
};

module.exports = {
  createUser,
  login
};
