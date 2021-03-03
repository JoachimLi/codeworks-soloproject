const { User } = require('../models');

const create = async (ctx) => {
  const user = new User({...ctx.request.body});
  console.log('user', user);
  ctx.status = 201;
};

module.exports = { create };
