import Jafar = require('../Villain/Jafar');

test('Jafar', () => {
  const jafar = new Jafar();
  expect(jafar.name).toBe('Jafar');
});