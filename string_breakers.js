function stringBreakers(n, string) {
  let s = string.replace(/ /gi, "");
  let str = "";
  for (var i = 0; i < s.length; i = i + n) {
    str = str + s.substring(i, i + n) + "\n";
  }
  return str.trim();
}