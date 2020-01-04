"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Action = require("../Action/Action");
var GainPower = require("../Action/GainPower");
var PlayCard = require("../Action/PlayCard");
describe('Action', function () {
    test('Any Action is not covered by default', function () {
        var vanquish = new Action('Vanquish');
        var fate = new Action('Fate');
        expect(vanquish.isCovered).toBeFalsy();
        expect(fate.isCovered).toBeFalsy();
    });
    test('GainPower is not covered by default and store the correct amount', function () {
        var gainPower = new GainPower(3);
        expect(gainPower instanceof Action).toBeTruthy();
        expect(gainPower.name).toBe('Gain Power');
        expect(gainPower.amount).toBe(3);
    });
    test('Play A Card is not covered and does not play any card by default', function () {
        var playACard = new PlayCard();
        expect(playACard instanceof Action).toBeTruthy();
        expect(playACard.name).toBe('Play A Card');
        expect(playACard.targetCard).toBe('');
    });
});
