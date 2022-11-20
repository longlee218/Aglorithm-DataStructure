import { describe, expect, test } from '@jest/globals';
import updateBit from '../updateBits';

describe('Updatebit', () => {
  test('Update bit 1 at position 2', () => {
    expect(updateBit(20, 2, 0)).toBe(16);
  });
});
