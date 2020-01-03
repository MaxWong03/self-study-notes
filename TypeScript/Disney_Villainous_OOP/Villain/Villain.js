"use strict";
var Villain = /** @class */ (function () {
    function Villain() {
    }
    Villain.prototype.hasLockedLocation = function () {
        var lockedLocation = this.realm.find(function (realmLocation) { return realmLocation.isLocked; });
        if (lockedLocation)
            return true;
        else
            return false;
    };
    return Villain;
}());
module.exports = Villain;
