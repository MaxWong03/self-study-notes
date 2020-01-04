import Action = require('./Action');

class Fate extends Action {
  targetPlayer: string;

  constructor() {
    super('Fate');
    this.targetPlayer = '';
  }

  fatePlayer(targetPlayer: string) {
    this.targetPlayer = targetPlayer;
  }
}

export = Fate;