import { describe, expect, test } from '@jest/globals';
import setBits from '../setBits';

describe('Setbit', () => {
  test('Should set bit at specific position', () => {
    // 9 is 1001 set bit 1 at 2 then = 1011 = 8 + 1 + 2  = 13  
    expect(setBits(9, 2)).toBe(13);
    // 14 is 1110 set bit 1 at 5 then 101110 = 32 + 8 + 4 + 2 = 46
    expect(setBits(14, 5)).toBe(46);
  });
});
