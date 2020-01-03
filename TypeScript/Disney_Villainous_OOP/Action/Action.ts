class Action {
  name: string;
  isCovered: boolean;

  constructor(name: string) {
    this.name = name;
    this.isCovered = false;
  }
}

export = Action;