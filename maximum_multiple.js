function maxMultiple(divisor, bound) {
  let number;
  for (var i = 1; i <= bound; i++) {
    if (i % divisor == 0) {
      number = i;
    }
  }
  return number;
}

// function maxMultiple(divisor, bound){
//   return bound-bound%divisor
// }