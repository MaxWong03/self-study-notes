class Card {
  deckType: string;
  cardType: string;
  name: string;
  ability: string;
  cost: number;

  constructor(deckType: string, cardType: string, name: string, ability: string, cost: number) {
    this.deckType = deckType;
    this.cardType = cardType;
    this.name = name;
    this.ability = ability;
    this.cost = cost;
  }
}

export = Card;