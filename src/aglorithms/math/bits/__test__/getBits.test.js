import { describe, expect, test } from '@jest/globals';
import getBit from '../getBits';

describe('Get bit', () => {
  test('Test get bit', () => {
    expect(getBit(9, 2)).toBe(0); // 9 is 1001, 1001 >> 2 = 1110 AND 0001 => 0
    expect(getBit(12, 2)).toBe(1); // 12 is 1100 >> 2 = 1111 AND 0001 => 1
  });
});
