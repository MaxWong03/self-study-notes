import Action = require('./Action');

class PlayCard extends Action {
  targetCard: string;

  constructor() {
    super('Play A Card');
    this.targetCard = '';
  }

  playACard(targetCard: string) {
    this.targetCard = targetCard;
  }
}

export = PlayCard;