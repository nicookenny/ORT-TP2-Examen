import { numbersService } from '../service/numbers.js';

class NumbersControllers {
  constructor(service) {
    this.service = service;
  }

  getNumbers = (req, res) => {
    const numbers = this.service.getNumbers();
    res.send({ numbers });
  };

  addNumber = (req, res) => {
    const { number } = req.body;

    const isNumber = typeof +number === 'number' && !isNaN(+number);

    if (!isNumber) {
      return res.status(400).send('Invalid number');
    }

    this.service.addNumber(+number);

    res.send({
      number,
    });
  };

  getMinMax = (req, res) => {
    const minMax = this.service.getMinMax();
    res.send({
      min: minMax.min,
      max: minMax.max,
    });
  };

  getAverage = (req, res) => {
    const average = this.service.getAverage();
    res.send({ average });
  };

  getQuantity = (req, res) => {
    const quantity = this.service.getQuantity();
    res.send({ quantity });
  };
}

export const numbersController = new NumbersControllers(numbersService);
