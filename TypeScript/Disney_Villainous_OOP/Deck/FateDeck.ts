import Deck = require('./Deck');
import Card = require('../Card/Card');

class FateDeck extends Deck {
  villain: string;
  cards: Array<Card>;
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

export = FateDeck;