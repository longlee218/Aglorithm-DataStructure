import { describe, expect, test } from '@jest/globals';
import clearBit from '../clearBits';

describe('Clear bit', () => {
  test('Should clear bit position to be 0', () => {
    expect(clearBit(13, 2)).toBe(9);
    expect(clearBit(20, 1)).toBe(20);
    expect(clearBit(20, 2)).toBe(16);
  });
});
