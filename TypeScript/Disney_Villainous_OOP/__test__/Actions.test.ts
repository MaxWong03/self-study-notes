import Action = require('../Action/Action');

describe('Action', () => {
  test('Any Action is not covered by default', () => {
    const vanquish = new Action('Vanquish');
    const fate = new Action('Fate');
    expect(vanquish.isCovered).toBeFalsy();
    expect(fate.isCovered).toBeFalsy();
  });
})