export function quickSort(array) {
  if (array.length < 2) {
    return array;
  }

  let pivot = array[Math.trunc(array.length / 2)];
  let less = [];
  let greater = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      less.push(array[i]);
    } else if (array[i] > pivot) {
      greater.push(array[i]);
    }
  }

  return [...quickSort(less), pivot, ...quickSort(greater)];
}
