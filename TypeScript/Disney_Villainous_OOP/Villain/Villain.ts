import RealmLocation = require('../RealmLocation');

class Villain {
  name: string;
  objective: string;
  realm: Array<RealmLocation>;

  hasLockedLocation() {
    const lockedLocation = this.realm.find(realmLocation => realmLocation.isLocked);
    if (lockedLocation) return true
    else return false;
  }
}


export = Villain;