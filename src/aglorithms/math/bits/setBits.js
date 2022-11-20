/**
 * Set bit 1 at sepecific position
 * @param {number} number Number in dec
 * @param {number} bitPosition bit position want to set
 * @return {number} new number after set
 */
export default function setBits(number, bitPosition) {
  return number | (1 << bitPosition);
}
