import Sort from '../Sort';

export default class InsertionSort extends Sort {
  /**
   * Insert Sort
   * @param {Array<string | number>} arr
   */
  sort(arr) {
    const array = [...arr];
    for (let i = 1; i < array.length; i++) {
      let j = i;
      while (j > 0 && array[j - 1] > array[j]) {
        [array[j - 1], array[j]] = [array[j], array[j - 1]];
        j -= 1;
      }
    }
    return array;
  }
}
