const Koa = require('koa');

const server = new Koa();
const PORT = 3000;

server.listen(PORT, () => {
  console.log(`server listening at http://localhost:${PORT}`);
});
