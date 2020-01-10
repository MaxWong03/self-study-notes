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
var Deck = require("./Deck");
var VillainDeck = /** @class */ (function (_super) {
    __extends(VillainDeck, _super);
    function VillainDeck(type, villain) {
        var _this = _super.call(this, type) || this;
        _this.villain = villain;
        return _this;
    }
    VillainDeck.prototype.draw = function () {
    };
    VillainDeck.prototype.shuffle = function () {
    };
    VillainDeck.prototype.peek = function () {
    };
    VillainDeck.prototype.returnCard = function () {
    };
    return VillainDeck;
}(Deck));
module.exports = VillainDeck;
