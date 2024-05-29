class NumbersRepository {
  numbers = [];

  addNumber = (number) => {
    this.numbers = [...this.numbers, number];
    console.log({
      message: 'Number added',
      numbers: this.numbers,
    });

    return new Promise((resolve) => {
      resolve(this.numbers);
    });
  };

  getNumbers = () => {
    return this.numbers;
  };
}

export const numbersRepository = new NumbersRepository();
