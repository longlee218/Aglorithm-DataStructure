import { describe, test } from '@jest/globals';
import SortTest from '../../SortTest';
import InsertionSort from '../InsertionSort';

describe('InsertionSort', () => {
  test('sort general', () => SortTest.testSort(InsertionSort));
});
