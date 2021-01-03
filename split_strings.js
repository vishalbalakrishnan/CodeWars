function solution(str) {
  str = str.length % 2 != 0 ? str + '_' : str
  return str.match(/(\w){2}/gi) || [];
}
// return (s+"_").match(/.{2}/g)||[]