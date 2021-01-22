function pairs(ar) {
  count = 0;
  for (i = 0; i < ar.length; i++) {
    if (Math.abs(ar[i] - ar[i + 1]) == 1) {
      count++;
    }
    i++;
  }
  return count;
}