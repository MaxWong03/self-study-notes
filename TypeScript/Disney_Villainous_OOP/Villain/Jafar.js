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
var GainPower = require("../Action/GainPower");
var PlayCard = require("../Action/PlayCard");
var Activate = require("../Action/Activate");
var Vanquish = require("../Action/Vanquish");
var Fate = require("../Action/Fate");
var MoveAllyItem = require("../Action/MoveAllyItem");
var Discard = require("../Action/Discard");
var Jafar = /** @class */ (function (_super) {
    __extends(Jafar, _super);
    function Jafar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Jafar';
        _this.objective = "Start your turn with Magic Lamp at the Sultan's Palace and have Genie on your side";
        _this.realm = [
            new RealmLocation('Sultan Palace', false, [new PlayCard(), new Activate()], [new Vanquish(), new Fate()]),
            new RealmLocation('Streets Of Agrabah', false, [new GainPower(1), new Fate()], [new Discard(), new PlayCard()]),
            new RealmLocation('Oasis', false, [new Activate(), new PlayCard()], [new GainPower(3), new PlayCard()]),
            new RealmLocation('Cave Of Wonders', true, [new Discard(), new GainPower(2)], [new PlayCard(), new MoveAllyItem()])
        ];
        _this.currentLocation = 'Sultan Palace';
        return _this;
    }
    return Jafar;
}(Villain));
module.exports = Jafar;
