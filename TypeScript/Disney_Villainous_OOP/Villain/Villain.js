"use strict";
var Villain = /** @class */ (function () {
    function Villain() {
        this._power = 0;
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
    Object.defineProperty(Villain.prototype, "power", {
        get: function () {
            return this._power;
        },
        set: function (powerToken) {
            this._power + powerToken;
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
                throw new Error('Must move to another location');
            var locationClass = this.getLocationClass(newLocation);
            if (locationClass.isLocked)
                throw new Error('Can not move to a locked location');
            this._currentLocation = newLocation;
        },
        enumerable: true,
        configurable: true
    });
    Villain.prototype.getLocationClass = function (locationName) {
        return this._realm.find(function (realmLocation) { return realmLocation.name === locationName; });
    };
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
