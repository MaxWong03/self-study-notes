import Deck = require('./Deck');

class VillainDeck extends Deck {

  villain: string;

  constructor(type: string, villain: string) {
    super(type);
    this.villain = villain;
  }

  draw() {

  }
  
  shuffle() {

  }
  peek() {

  }
  returnCard() {

  }
}