import Sort from '../Sort';

export default class BubbleSort extends Sort {
  /**
   * Bubble sort
   * @param {Array<string | number>} arr
   */
  sort(arr) {
    const array = [...arr];
    let swap = false;
    for (let i = 1; i < array.length; i++) {
      swap = false;
      for (let j = 0; j < array.length - i; j++) {
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
          swap = true;
        }
      }
      if (!swap) {
        return array;
      }
    }
    return array;
  }
}

