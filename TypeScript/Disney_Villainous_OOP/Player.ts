import Villain = require('./Villain/Villain');
import Card = require('./Card/Card');
import VillainDeck = require('./Deck/VillainDeck');
import FateDeck = require('./Deck/FateDeck');

class Player {
  chosenVillan: Villain;
  hand: Array<Card>;
  playerNumber: Number;
  villainDeck: VillainDeck;
  fateDeck: FateDeck;
  

}

export = Player;