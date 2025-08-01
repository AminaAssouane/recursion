function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  else {
    let left = mergeSort(arr.slice(0, arr.length / 2));
    let right = mergeSort(arr.slice(arr.length / 2, arr.length));
    console.log(`MERGING : the left : ${left}, the right : ${right}`);
    let array = [];
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        array.push(left.shift());
      } else {
        array.push(right.shift());
      }
    }
    return array.concat(left, right);
  }
}
