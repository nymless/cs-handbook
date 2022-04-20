export function selectionSort(array) {
  let temp = [...array];
  let sorted = [];

  for (let i = 0; i < array.length; i++) {
    let smallest = findSmallest(temp);
    sorted.push(temp[smallest]);
    temp.splice(smallest, 1);
  }

  return sorted;

  function findSmallest(array) {
    let smallest = array[0];
    let smallestIndex = 0;

    for (let i = 1; i < array.length; i++) {
      if (array[i] < smallest) {
        smallest = array[i];
        smallestIndex = i;
      }
    }

    return smallestIndex;
  }
}
