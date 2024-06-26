import { numbersRepository } from '../model/numbers.model.js';

export class NumbersService {
  constructor(repository) {
    this.repository = repository;
  }

  addNumber = async (number) => {
    try {
      const numbers = await this.repository.addNumber(number);

      return numbers;
    } catch (error) {
      return [];
    }
  };

  getNumbers = () => {
    return this.repository.getNumbers();
  };

  getAverage = () => {
    const numbers = this.repository.getNumbers();
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length;
  };

  getMinMax = () => {
    const numbers = this.repository.getNumbers();
    return {
      min: Math.min(...numbers),
      max: Math.max(...numbers),
    };
  };

  getQuantity = () => {
    const numbers = this.repository.getNumbers();
    return numbers.length;
  };
}

export const numbersService = new NumbersService(numbersRepository);
