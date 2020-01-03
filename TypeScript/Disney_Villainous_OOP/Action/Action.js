"use strict";
var Action = /** @class */ (function () {
    function Action(name, isCovered) {
        if (isCovered === void 0) { isCovered = false; }
        this.name = name;
        this.isCovered = isCovered;
    }
    return Action;
}());
module.exports = Action;
