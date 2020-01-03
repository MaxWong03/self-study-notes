class Action {
  name: string;
  isCovered: boolean;

  constructor(name: string, isCovered: boolean = false) {
    this.name = name;
    this.isCovered = isCovered;
  }
}

export = Action;