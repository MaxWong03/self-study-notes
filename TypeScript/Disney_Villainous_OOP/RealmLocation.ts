import Action = require('./Action');

class RealmLocation {
  name: string;
  isLocked: boolean;
  topActions: Array<Action>;
  bottomActions: Array<Action>;

  constructor(name: string, isLocked: boolean = false, topActions: Array<Action>, bottomActions: Array<Action>) {
    this.name = name;
    this.isLocked = isLocked;
    this.topActions = topActions;
    this.bottomActions = bottomActions;
  }
}

export = RealmLocation;