function arrayPlusArray(arr1, arr2) {
    let arr = arr1.concat(arr2);
    arr = arr.reduce((a, b) => a + b, 0)
    return arr; //something went wrong
  }