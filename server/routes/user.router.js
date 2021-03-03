const Router = require('koa-router');
const router = new Router({ prefix: '/user' });
const { createUser, login } = require('../controllers');

router.post('/register', createUser);
router.post('/login', login);

module.exports = router;
