"use strict";
var Card = /** @class */ (function () {
    function Card(deckType, cardType, name, ability, cost) {
        this.deckType = deckType;
        this.cardType = cardType;
        this.name = name;
        this.ability = ability;
        this.cost = cost;
    }
    return Card;
}());
module.exports = Card;
