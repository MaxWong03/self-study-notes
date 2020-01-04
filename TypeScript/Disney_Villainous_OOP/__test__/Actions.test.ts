import Action = require('../Action/Action');
import GainPower = require('../Action/GainPower');
import PlayCard = require('../Action/PlayCard');
import Activate = require('../Action/Activate');
import Vanquish = require('../Action/Vanquish');
import Fate = require('../Action/Fate');
import MoveAllyItem = require('../Action/MoveAllyItem');
import Discard = require('../Action/Discard');

describe('Action', () => {
  test('Any Action is not covered by default', () => {
    const vanquish = new Action('Vanquish');
    const fate = new Action('Fate');
    expect(vanquish.isCovered).toBeFalsy();
    expect(fate.isCovered).toBeFalsy();
  });

  test('GainPower is not covered by default and store the correct amount', () => {
    const gainPower = new GainPower(3);
    expect(gainPower instanceof Action).toBeTruthy();
    expect(gainPower.name).toBe('Gain Power');
    expect(gainPower.amount).toBe(3);
  });

  test('Play A Card is not covered and does not play any card by default', () => {
    const playACard = new PlayCard();
    expect(playACard instanceof Action).toBeTruthy();
    expect(playACard.name).toBe('Play A Card');
    expect(playACard.targetCard).toBe('');
  });

  test('Activate is not covered and does not play any card by default', () => {
    const activate = new Activate();
    expect(activate instanceof Action).toBeTruthy();
    expect(activate.name).toBe('Activate');
    expect(activate.targetCard).toBe('');
  });

  test('Play A Card is not covered and does not play any card by default', () => {
    const vanquish = new Vanquish();
    expect(vanquish instanceof Action).toBeTruthy();
    expect(vanquish.name).toBe('Vanquish');
    expect(vanquish.targetHero).toBe('');
  });

  test('Play A Card is not covered and does not play any card by default', () => {
    const fate = new Fate();
    expect(fate instanceof Action).toBeTruthy();
    expect(fate.name).toBe('Fate');
    expect(fate.targetPlayer).toBe('');
  });

  test('Play A Card is not covered and does not play any card by default', () => {
    const moveAllyItem = new MoveAllyItem();
    expect(moveAllyItem instanceof Action).toBeTruthy();
    expect(moveAllyItem.name).toBe('Move An Ally Or Item');
    expect(moveAllyItem.targetAlly).toBe('');
    expect(moveAllyItem.targetItem).toBe('');
  });

  test('Play A Card is not covered and does not play any card by default', () => {
    const discard = new Discard();
    expect(discard instanceof Action).toBeTruthy();
    expect(discard.name).toBe('Discard');
    expect(discard.targetCards).toEqual([]);
  });
  
})