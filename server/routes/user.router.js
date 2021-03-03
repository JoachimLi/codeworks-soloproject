const Router = require('koa-router');
const router = new Router();
const { create } = require('../controllers');

router.post('/user/register', create);

module.exports = router;
