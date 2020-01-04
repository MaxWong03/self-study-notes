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
var PlayCard = /** @class */ (function (_super) {
    __extends(PlayCard, _super);
    function PlayCard() {
        var _this = _super.call(this, 'Play A Card') || this;
        _this.targetCard = '';
        return _this;
    }
    PlayCard.prototype.playACard = function (targetCard) {
        this.targetCard = targetCard;
    };
    return PlayCard;
}(Action));
module.exports = PlayCard;
