import Action = require('../Action/Action');
import GainPower = require('../Action/GainPower');
import PlayCard = require('../Action/PlayCard');
import Activate = require('../Action/Activate');

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
})