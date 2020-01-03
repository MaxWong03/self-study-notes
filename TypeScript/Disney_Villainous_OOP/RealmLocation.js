"use strict";
var RealmLocation = /** @class */ (function () {
    function RealmLocation(name, isLocked, topActions, bottomActions) {
        if (isLocked === void 0) { isLocked = false; }
        this.name = name;
        this.isLocked = isLocked;
        this.topActions = topActions;
        this.bottomActions = bottomActions;
    }
    return RealmLocation;
}());
module.exports = RealmLocation;
