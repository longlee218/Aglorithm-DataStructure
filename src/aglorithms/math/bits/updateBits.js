export default function updateBit(number, bitPosition, bitValue) {
  // clear bit
  const clearBit = number & ~(1 << bitPosition);
  // set bit
  const bitValueNormalize = bitValue ? 1 : 0;

  return clearBit | (bitValueNormalize << bitPosition);
}
