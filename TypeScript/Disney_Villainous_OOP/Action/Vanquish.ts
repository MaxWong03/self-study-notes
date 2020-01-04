import Action = require('./Action');

class Vanquish extends Action {
  targetHero: string;

  constructor() {
    super('Vanquish');
    this.targetHero = '';
  }

  defeatHero(targetHero: string) {
    this.targetHero = targetHero;
  }
}

export = Vanquish;