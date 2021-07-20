function findRotationCount(array, start = 0, end = array.length - 1) {
  if (end < start) return 0;
  if (end === start) return start;
  let middle = Math.floor((start + end) / 2)

  if (middle < end && array[middle + 1] < array[middle])
    return middle + 1;

  if (middle > start && array[middle] < array[middle - 1]) {
    return middle;
  }

  if (array[end] > array[middle]) {
    return findRotationCount(array, start, middle - 1);
  }

  return findRotationCount(array, middle + 1, end);
}
