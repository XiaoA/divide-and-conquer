function findFloor(array, number, start = 0, end = array.length - 1) {
  if (start > end) return -1;
  if (number >= array[end]) return array[end];

  let middle = Math.floor((start + end) / 2)

  if (array[middle] === number) return array[middle];

  if (middle > 0 && array[middle - 1] <= number && number < array[middle]) {
    return array[middle - 1];
  }

  if (number < array[middle]) {
    return findFloor(array, number, start, middle - 1);
  }

  return findFloor(array, number, middle + 1, end)
}
