// var myPow = function (x, n) {
//   return (x ** n).toFixed(5);
// };
var myPow = function (x, n) {
  let result = 1;
  if (n < 0) (x = 1 / x), (n *= -1);
  while (n > 0) {
    if (n % 2 == 0) {
      x = x * x;
      n = Math.floor(n / 2);
    } else {
      result = result * x;
      n = n - 1;
    }
  }
  return result;
};

console.log(myPow(0.00001, 2147483647));
