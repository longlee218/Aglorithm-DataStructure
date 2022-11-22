import Sort from '../Sort';

export default class SelectionSort extends Sort {
  /**
   * Selection sort
   * @param {Array<string | number>} arr
   */
  sort(arr) {
    const array = [...arr];
    for (let i = 0; i < array.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
      if (i !== minIndex) {
        [array[minIndex], array[i]] = [array[i], array[minIndex]];
      }
    }
    return array;
  }
}