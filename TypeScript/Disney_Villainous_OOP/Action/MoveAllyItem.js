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
var MoveAllyItem = /** @class */ (function (_super) {
    __extends(MoveAllyItem, _super);
    function MoveAllyItem() {
        var _this = _super.call(this, 'Move An Ally Or Item') || this;
        _this.targetAlly = '';
        _this.targetItem = '';
        return _this;
    }
    MoveAllyItem.prototype.moveAlly = function (targetAlly) {
        this.targetAlly = targetAlly;
    };
    MoveAllyItem.prototype.moveItem = function (targetItem) {
        this.targetItem = targetItem;
    };
    return MoveAllyItem;
}(Action));
module.exports = MoveAllyItem;
