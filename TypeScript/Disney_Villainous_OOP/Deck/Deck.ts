abstract class Deck {
  type: string;

  constructor(type: string) {
    this.type = type;
  }

  abstract draw();

  abstract shuffle();

  abstract peek();

  abstract returnCard();

}

export = Deck;