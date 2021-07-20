function findRotatedIndex(array, number) {
  let pivot = findPivot(array)
  if (pivot > 0 && number >= array[0] && number <= array[pivot - 1]) {
    return binarySearch(array, number, 0, pivot - 1);
  } else {
    return binarySearch(array, number, pivot, array.length - 1);
  }
}

function binarySearch(array, number, start, end) {
  if (array.length === 0) return -1;
  if (number < array[start] || number > array[end]) return -1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (array[middle] === number) {
      return middle;
    } else if (number < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return -1;
}

function findPivot(array) {
  if (array.length === 1 || array[0] < array[array.length - 1]) return 0;
  let start = 0
  let end = array.length - 1;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (array[middle] > array[middle + 1]) return middle + 1
    else if (array[start] <= array[middle]) {
      start = middle + 1
    } else {
      end = middle - 1
    }
  }
}
