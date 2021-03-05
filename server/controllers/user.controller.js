const { User } = require('../models');

const createUser = async (ctx) => {
  const user = new User({...ctx.request.body});
  // add these categories by default for every new user
  user.categoriesToTrack = [
    { title: 'total', timeLogged: '' },
    { title: 'pic', timeLogged: '' },
    { title: 'night', timeLogged: '' }
  ];
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
  const { email } = ctx.request.body;     // ctx.request.body also includes password for later use
  try {
    const user = await User.findOne({ email: email });
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

// get user details from db
const userDetails = async (ctx) => {
  const { userId } = ctx.request.body;
  try {
    const { _id, email, firstName, lastName, categoriesToTrack } = await User.findById(userId);
    ctx.status = 200;
    ctx.body = { _id, email, firstName, lastName, categoriesToTrack };
  } catch (error) {
    ctx.status = 500;
  }
};

// add time categories to user document in db
const updateUser = async (ctx) => {
  const newUserInfo = ctx.request.body;
  try {
    const user = await User.findById(newUserInfo._id);
    Object.assign(user, newUserInfo);
    await user.save();
    ctx.status = 200;
  } catch (error) {
    ctx.status = 500;
    console.log('error', error);
  }
};

module.exports = {
  createUser,
  login,
  userDetails,
  updateUser
};
