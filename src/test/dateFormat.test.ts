import LocaleDateFormat from '../utils/LocaleDateFormat/LocaleDateFormat';

test('check date format from yyyy-mm-dd hh:mm:ss to weekday dd mm', () => {
  expect(LocaleDateFormat("2017-02-16 12:00:00")).toBe("Thursday, 16 February");
});
