const Koa = require('koa');
const router = require('./routes/user.router');
const bodyParser = require('koa-bodyparser');

const server = new Koa();
const PORT = 3000;

server.use(bodyParser());
server.use(router.routes());

server.listen(PORT, () => {
  console.log(`server listening at http://localhost:${PORT}`);
});
