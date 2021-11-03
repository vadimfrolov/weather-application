import KelvinToCelsiusConverter from '../utils/KelvinToCelsiusConverter/KelvinToCelsiusConverter';

test('check temperature converter from kelvin to celsius', () => {
  expect(KelvinToCelsiusConverter("286.67")).toBe(13);
});
