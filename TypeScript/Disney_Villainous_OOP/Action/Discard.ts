import Action = require('./Action');

class Discard extends Action {
  targetCards: Array<string>;

  constructor() {
    super('Discard');
    this.targetCards = [];
  }

  discardCards(targetCards: Array<string>) {
    this.targetCards = targetCards;
  }
}

export = Discard;