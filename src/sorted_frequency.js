function sortedFrequency(array, number) {
  let firstIndex = findFirstIndex(array, number);
  if (firstIndex == -1) return firstIndex;
  let lastIndex = findLastIndex(array, number);
  return lastIndex - firstIndex + 1;
}

function findFirstIndex(array, number, start = 0, end = array.length - 1) {
  if (end >= start) {
    let middle = Math.floor((start + end) / 2)
    if ((middle === 0 || number > array[middle - 1]) && array[middle] === number) {
      return middle;
    } else if (number > array[middle]) {
      return findFirstIndex(array, number, middle + 1, end)
    } else {
      return findFirstIndex(array, number, start, middle - 1)
    }
  }
  return -1
}

function findLastIndex(array, number, start = 0, end = array.length - 1) {
  if (end >= start) {
    let middle = Math.floor((start + end) / 2)
    if ((middle === array.length - 1 || number < array[middle + 1]) && array[middle] === number) {
      return middle;
    } else if (number < array[middle]) {
      return findLastIndex(array, number, start, middle - 1)
    } else {
      return findLastIndex(array, number, middle + 1, end)
    }
  }
  return -1
}
