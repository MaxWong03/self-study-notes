class RealmLocation {
  name: string;
  isLocked: boolean;

  constructor(name: string, isLocked: boolean = false) {
    this.name = name;
    this.isLocked = isLocked;
  }
}

export = RealmLocation;