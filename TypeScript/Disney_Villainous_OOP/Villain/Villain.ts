import RealmLocation = require('../RealmLocation');

class Villain {
  private _name: string;
  private _objective: string;
  private _realm: Array<RealmLocation>;
  private _currentLocation: string;

  get name() {
    return this._name;
  }

  set name(villainName: string) {
    this._name = villainName;
  }

  get objective() {
    return this._objective;
  }

  set objective(villainObjective: string) {
    this._objective = villainObjective;
  }

  get realm() {
    return this._realm;
  }

  set realm(villainRealm: Array<RealmLocation>) {
    this._realm = villainRealm;
  }


  get currentLocation() {
    return this._currentLocation;
  }

  set currentLocation(newLocation: string) {
    if (newLocation === this.currentLocation) throw new Error('Must move to new location at the start of each turn');
    this._currentLocation = newLocation;
  }
  
  hasLockedLocation() {
    const lockedLocation = this._realm.find(realmLocation => realmLocation.isLocked);
    if (lockedLocation) return true
    else return false;
  }

  move(newLocation: string) {
    this.currentLocation = newLocation;
    return true; //return true upon sucession
  }
}


export = Villain;