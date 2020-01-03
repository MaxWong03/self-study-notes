import Action = require('./Action');

class GainPower extends Action {
  amount: number;

  constructor(amount: number) {
    super('GainPower', false);
    this.amount = amount;
  }
}

export = GainPower;