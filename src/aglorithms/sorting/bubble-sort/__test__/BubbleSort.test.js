import { describe, test } from '@jest/globals';
import SortTest from '../../SortTest';
import BubbleSort from '../BubbleSort';

describe('BubbleSort', () => {
  test('sort general', () => SortTest.testSort(BubbleSort));
});
