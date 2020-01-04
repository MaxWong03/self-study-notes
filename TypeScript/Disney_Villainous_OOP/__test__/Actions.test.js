"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Action = require("../Action/Action");
var GainPower = require("../Action/GainPower");
var PlayCard = require("../Action/PlayCard");
var Activate = require("../Action/Activate");
var Vanquish = require("../Action/Vanquish");
var Fate = require("../Action/Fate");
var MoveAllyItem = require("../Action/MoveAllyItem");
var Discard = require("../Action/Discard");
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
    test('Activate is not covered and does not play any card by default', function () {
        var activate = new Activate();
        expect(activate instanceof Action).toBeTruthy();
        expect(activate.name).toBe('Activate');
        expect(activate.targetCard).toBe('');
    });
    test('Play A Card is not covered and does not play any card by default', function () {
        var vanquish = new Vanquish();
        expect(vanquish instanceof Action).toBeTruthy();
        expect(vanquish.name).toBe('Vanquish');
        expect(vanquish.targetHero).toBe('');
    });
    test('Play A Card is not covered and does not play any card by default', function () {
        var fate = new Fate();
        expect(fate instanceof Action).toBeTruthy();
        expect(fate.name).toBe('Fate');
        expect(fate.targetPlayer).toBe('');
    });
    test('Play A Card is not covered and does not play any card by default', function () {
        var moveAllyItem = new MoveAllyItem();
        expect(moveAllyItem instanceof Action).toBeTruthy();
        expect(moveAllyItem.name).toBe('Move An Ally Or Item');
        expect(moveAllyItem.targetAlly).toBe('');
        expect(moveAllyItem.targetItem).toBe('');
    });
    test('Play A Card is not covered and does not play any card by default', function () {
        var discard = new Discard();
        expect(discard instanceof Action).toBeTruthy();
        expect(discard.name).toBe('Discard');
        expect(discard.targetCards).toEqual([]);
    });
});
