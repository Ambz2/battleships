import { TestWatcher } from 'jest';
import compare from '../src/helper.js';

test('compares coordinates', () => {
  const coord1 = [1, 1];
  const coord2 = [1,1];

  const result = compare(coord1, coord2);
  expect(result).toEqual(true);
})

test('compares coordinates', () => {
  const coord1 = [1, 1];
  const coord2 = [1,5];

  const result = compare(coord1, coord2);
  expect(result).toEqual(false);
})