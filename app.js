require('dotenv').config({ path: 'variables.env' });
const Server = require('./src/models/server');

const server = new Server();
server.listen();
