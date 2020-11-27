function modifiedSum(a, n) {
    return a.reduce((acc, val) => acc + Math.pow(val, n), 0) - a.reduce((acc, val) => acc + val, 0)
}

// function modifiedSum(a, n) {
//     return a.reduce((s, c) => s + Math.pow(c, n) - c, 0);
//   }