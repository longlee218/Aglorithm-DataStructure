function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}

/**
 *
 * @param {number} number number
 * @param {number} bitPosition bit position - zero based
 * @return {number}
 */
export default function getBit(number, bitPosition) {
  return (number >> bitPosition) & 1;
}

console.log(getBit(9, 2))