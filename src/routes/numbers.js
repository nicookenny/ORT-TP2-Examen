import { Router } from 'express';
import { numbersController } from '../controller/numbers.js';

class NumbersRouter {
  router = Router();
  path = '/numbers';

  constructor() {
    this.init();
  }

  init = () => {
    this.router.get('/entrada', numbersController.getNumbers);
    this.router.post('/entrada', numbersController.addNumber);
    this.router.get('/minmax', numbersController.getMinMax);
    this.router.get('/promedio', numbersController.getAverage);
    this.router.get('/cantidad', numbersController.getQuantity);
  };
}

export const numbersRouter = new NumbersRouter();
