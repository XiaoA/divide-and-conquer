function countZeroes(array) {
  let firstZero = findFirstZero(array)
  if (firstZero === -1) return 0;

  return array.length - firstZero
}

function findFirstZero(array, start = 0, end = array.length - 1) {
  if (end >= start) {
    let middle = start + Math.floor((end - start) / 2)
    if ((middle === 0 || array[middle - 1] === 1) && array[middle] === 0) {
      return middle;
    } else if (array[middle] === 1) {
      return findFirstZero(array, middle + 1, end)
    }
    return findFirstZero(array, start, middle - 1)
  }
  return -1;
}
