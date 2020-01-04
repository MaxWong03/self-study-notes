import Action = require('./Action');
import Villain = require('../Villain/Villain');

class GainPower extends Action {
  amount: number;

  constructor(amount: number) {
    super('Gain Power');
    this.amount = amount;
  }

  execute(villain: Villain) {
    villain.power = villain.power + this.amount;
  }
}

export = GainPower;