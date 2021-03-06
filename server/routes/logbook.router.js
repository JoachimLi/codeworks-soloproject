const Router = require('koa-router');
const router = new Router({ prefix: '/logbook' });
const { createFlight, getFlights } = require('../controllers');

router.post('/new-flight', createFlight);
router.post('/flights', getFlights);

module.exports = router;
