const Router = require('koa-router');
const router = new Router({ prefix: '/user' });
const { createUser, login, userDetails, updateUser } = require('../controllers');

router.post('/register', createUser);
router.post('/login', login);
router.post('/details', userDetails);
router.post('/update', updateUser);

module.exports = router;
