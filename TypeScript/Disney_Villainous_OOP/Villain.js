"use strict";
exports.__esModule = true;
var RealmLocation = require("./RealmLocation");
var Action = require("./Action/Action");
var Villain = /** @class */ (function () {
    function Villain(name, objective, realm) {
        this.name = name;
        this.objective = objective;
        this.realm = realm;
    }
    return Villain;
}());
var GainPower = new Action('Gain Power');
var Vanquish = new Action('Vanquish');
var Fate = new Action('Fate');
var MoveAllyOrItem = new Action('MoveAllyOrItem');
var Discard = new Action('Discard');
var Activate = new Action('Activate');
var PlayACard = new Action('Play A Card');
var SultanPalace = new RealmLocation('Sultan Palace', false, [PlayACard, Activate], [Vanquish, Fate]);
var StreetsOfAgrabah = new RealmLocation('Streets Of Agrabah', false, [GainPower, Fate], [Discard, PlayACard]);
var Oasis = new RealmLocation('Oasis', false, [Activate, PlayACard], [GainPower, PlayACard]);
var CaveOfWonders = new RealmLocation('Cave Of Wonders', true, [Discard, GainPower], [PlayACard, MoveAllyOrItem]);
var JafarRealm = [SultanPalace, StreetsOfAgrabah, Oasis, CaveOfWonders];
var Jafar = new Villain('Jafar', "Start your turn with Magic Lamp at the Sultan's Palace and have Genie on your side", JafarRealm);
console.log(Jafar.name);
console.log(Jafar.objective);
console.log(Jafar.realm);
