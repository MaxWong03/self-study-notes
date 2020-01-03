import Jafar = require('../Villain/Jafar');

test('Jafar', () => {
  const jafar = new Jafar();
  describe('Attributes', () => {
    expect(jafar.name).toBe('Jafar');
    expect(jafar.realm.length).toBe(4);
  });

  describe('Methods', () => {
    expect(jafar.hasLockedLocation()).toBe(true);
    expect(jafar.hasLockedLocation()).not.toBe(false);
  });
});