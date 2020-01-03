import RealmLocation = require('../RealmLocation');

class Villain {
  name: string;
  objective: string;
  realm: Array<RealmLocation>;

  constructor(name: string, objective: string, realm: Array<RealmLocation>) {
    this.name = name;
    this.objective = objective;
    this.realm = realm;
  }
}


export = Villain;