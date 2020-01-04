"use strict";
var Action = /** @class */ (function () {
    function Action(name) {
        this.name = name;
        this.isCovered = false;
    }
    Action.prototype.execute = function (param) {
    };
    return Action;
}());
module.exports = Action;
