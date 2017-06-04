const superPad = require('./index');

test('super padding works', () => {
  expect(superPad('asd')).toBe(' asd ');
});
