function getCount(str) {
  return str.match(/a|e|i|o|u/gi) ? str.match(/a|e|i|o|u/gi)
    .length : 0
}