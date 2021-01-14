function findUniq(arr) {
  if (arr.lastIndexOf(arr[0]) === 0) {
    return arr[0]
  }
  for (var i = 1; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === i) {
      return arr[i];
    }
  }
}

// function findUniq(arr) {
//   arr.sort((a, b) => a - b);
//   return arr[0] == arr[1] ? arr.pop() : arr[0]
// }

// function findUniq(arr) {
//   return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
// }