/**
 * Get Bit at specific position from right to left
 * @param {number} number number
 * @param {number} bitPosition bit position - zero based
 * @return {number} bit at position
 */
export default function getBit(number, bitPosition) {
  return (number >> bitPosition) & 1;
}
