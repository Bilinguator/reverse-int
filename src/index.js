module.exports = function reverse (n) {
  let str = String(Math.abs(n));
  let resultStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
      resultStr += str[i];
  }
  return Number(resultStr);
}
