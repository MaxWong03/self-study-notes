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
var Villain = require("./Villain");
var RealmLocation = require("../RealmLocation");
var Action = require("../Action/Action");
var Jafar = /** @class */ (function (_super) {
    __extends(Jafar, _super);
    function Jafar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Jafar';
        _this.objective = "Start your turn with Magic Lamp at the Sultan's Palace and have Genie on your side";
        _this.realm = [
            new RealmLocation('Sultan Palace', false, [new Action('Play A Card'), new Action('Activate')], [new Action('Vanquish'), new Action('Fate')]),
            new RealmLocation('Streets Of Agrabah', false, [new Action('GainPower'), new Action('Fate')], [new Action('Discard'), new Action('PlayACard')]),
            new RealmLocation('Oasis', false, [new Action('Activate'), new Action('PlayACard')], [new Action('GainPower'), new Action('PlayACard')]),
            new RealmLocation('Cave Of Wonders', true, [new Action('Discard'), new Action('GainPower')], [new Action('PlayACard'), new Action('MoveAllyOrItem')])
        ];
        return _this;
    }
    return Jafar;
}(Villain));
module.exports = Jafar;
