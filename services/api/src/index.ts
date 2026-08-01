const Express = require('express');
const { createServer } = require('http');

const app = Express();

const server = createServer(app);

server.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});

