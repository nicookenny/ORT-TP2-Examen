import express from 'express';
import { routers } from './routes/index.js';

class Server {
  port = process.env.PORT || 3000;
  constructor() {
    this.app = express();
  }
  init = () => {
    this.setMiddlewares();
    this.setRoutes(routers);

    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  };

  setRoutes = (routes) => {
    routes.forEach((route) => {
      this.app.use(route.path, route.router);
    });
  };

  setMiddlewares = () => {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  };
}

export default Server;
