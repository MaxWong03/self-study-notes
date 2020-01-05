import Card = require('../Card/Card');

abstract class Deck {
  type: string;
  cards: Array<Card>;

  constructor(type: string) {
    this.type = type;
  }

  abstract draw();

  abstract shuffle();

  abstract peek();

  abstract returnCard();

}

export = Deck;