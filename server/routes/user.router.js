const Router = require('koa-router');
const router = new Router({ prefix: '/user' });
const { createUser } = require('../controllers');

router.post('/register', createUser);

module.exports = router;
