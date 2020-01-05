abstract class Deck {
  type: string;

  abstract draw();

  abstract shuffle();

  abstract peek();

  abstract returnCard();

}
