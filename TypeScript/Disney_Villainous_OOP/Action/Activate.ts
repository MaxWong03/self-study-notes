import Action = require('./Action');

class Activate extends Action {
  targetCard: string;

  constructor() {
    super('Activate');
    this.targetCard = '';
  }

  activateACard(targetCard: string) {
    this.targetCard = targetCard;
  }
}

export = Activate;