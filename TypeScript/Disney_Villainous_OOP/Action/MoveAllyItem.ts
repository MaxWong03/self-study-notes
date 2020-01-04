import Action = require('./Action');

class MoveAllyItem extends Action {
  targetAlly: string;
  targetItem: string;

  constructor() {
    super('Move An Ally Or Item');
    this.targetAlly = '';
    this.targetItem = '';
  }

  moveAlly(targetAlly: string){
    this.targetAlly = targetAlly;
  }

  moveItem(targetItem: string) {
    this.targetItem = targetItem;
  }
}

export = MoveAllyItem;