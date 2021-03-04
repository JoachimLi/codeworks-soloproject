const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');

const userRouter = require('./routes/user.router');
const logbookRouter = require('./routes/logbook.router');

const server = new Koa();
const PORT = 3000;

server.use(cors());
server.use(bodyParser());
server.use(userRouter.routes());
server.use(logbookRouter.routes());

server.listen(PORT, () => {
  console.log(`server listening at http://localhost:${PORT}`);
});
