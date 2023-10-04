const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("./data/questions.json");
const middlewares = jsonServer.defaults();
const port = 5000;

server.use(middlewares);
server.use(router);

server.listen(port);
