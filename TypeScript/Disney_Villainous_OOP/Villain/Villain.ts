import RealmLocation = require('../RealmLocation');

class Villain {
  private _name: string;
  private _objective: string;
  private _realm: Array<RealmLocation>;
  private _currentLocation: string;
  private _power: number = 0;

  get name() {
    return this._name;
  }

  set name(villainName: string) {
    this._name = villainName;
  }

  get power() {
    return this._power;
  }

  set power(powerToken: number) {
    this._power + powerToken;
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

  getLocationClass(locationName: string) {
    return this._realm.find(realmLocation => realmLocation.name === locationName);
  }

  set currentLocation(newLocation: string) {
    if (newLocation === this.currentLocation) throw new Error('Must move to another location');
    const locationClass = this.getLocationClass(newLocation);
    if (locationClass.isLocked) throw new Error('Can not move to a locked location');
    this._currentLocation = newLocation;
  }

  hasLockedLocation() {
    const lockedLocation = this._realm.find(realmLocation => realmLocation.isLocked);
    if (lockedLocation) return true;
    else return false;
  }

  move(newLocation: string) {
    this.currentLocation = newLocation;
    return true; //return true upon sucession
  }
}


export = Villain;