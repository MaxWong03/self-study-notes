import Card = require('../Card/Card');

abstract class Deck {
  type: string;
  cards: Array<Card> = [
    new Card('Villain',
    'Item',
    'Magic Lamp',
    'Unlock Cave of Wonder',
    4)
  ];

  constructor(type: string) {
    this.type = type;
  }

  abstract draw();

  abstract shuffle();

  abstract peek();

  abstract returnCard();

}

export = Deck;