const Router = require('koa-router');
const router = new Router({ prefix: '/user' });
const { createUser, login, userDetails } = require('../controllers');

router.post('/register', createUser);
router.post('/login', login);
router.post('/details', userDetails);

module.exports = router;
