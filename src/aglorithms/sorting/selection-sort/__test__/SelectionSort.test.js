import { describe, test } from '@jest/globals';
import SortTest from '../../SortTest';
import SelectionSort from '../SelectionSort';

describe('SelectionSort', () => {
  test('sort general', () => SortTest.testSort(SelectionSort));
});
