"use strict";
var RealmLocation = /** @class */ (function () {
    function RealmLocation(name, isLocked) {
        if (isLocked === void 0) { isLocked = false; }
        this.name = name;
        this.isLocked = isLocked;
    }
    return RealmLocation;
}());
module.exports = RealmLocation;
