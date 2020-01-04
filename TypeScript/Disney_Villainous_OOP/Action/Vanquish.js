"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Action = require("./Action");
var Vanquish = /** @class */ (function (_super) {
    __extends(Vanquish, _super);
    function Vanquish() {
        var _this = _super.call(this, 'Vanquish') || this;
        _this.targetHero = '';
        return _this;
    }
    Vanquish.prototype.defeatHero = function (targetHero) {
        this.targetHero = targetHero;
    };
    return Vanquish;
}(Action));
module.exports = Vanquish;
