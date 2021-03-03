const Router = require('koa-router');
const router = new Router({ prefix: '/logbook' });
const { createFlight } = require('../controllers');

router.post('/new-flight', createFlight);

module.exports = router;
