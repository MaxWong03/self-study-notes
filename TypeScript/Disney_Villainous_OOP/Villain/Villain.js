"use strict";
var Villain = /** @class */ (function () {
    function Villain() {
    }
    Object.defineProperty(Villain.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (villainName) {
            this._name = villainName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Villain.prototype, "objective", {
        get: function () {
            return this._objective;
        },
        set: function (villainObjective) {
            this._objective = villainObjective;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Villain.prototype, "realm", {
        get: function () {
            return this._realm;
        },
        set: function (villainRealm) {
            this._realm = villainRealm;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Villain.prototype, "currentLocation", {
        get: function () {
            return this._currentLocation;
        },
        set: function (newLocation) {
            if (newLocation === this.currentLocation)
                throw new Error('Must move to new location at the start of each turn');
            this._currentLocation = newLocation;
        },
        enumerable: true,
        configurable: true
    });
    Villain.prototype.hasLockedLocation = function () {
        var lockedLocation = this._realm.find(function (realmLocation) { return realmLocation.isLocked; });
        if (lockedLocation)
            return true;
        else
            return false;
    };
    Villain.prototype.move = function (newLocation) {
        this.currentLocation = newLocation;
        return true; //return true upon sucession
    };
    return Villain;
}());
module.exports = Villain;
