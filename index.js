import { config } from 'dotenv';
config({
  path: './.env',
});

import Server from './src/server.js';

const server = new Server();

server.init();
