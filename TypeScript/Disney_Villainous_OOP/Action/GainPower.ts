import Action = require('./Action');

class GainPower extends Action {
  amount: number;

  constructor(amount: number) {
    super('Gain Power');
    this.amount = amount;
  }
}

export = GainPower;