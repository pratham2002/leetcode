var isPerfectSquare = function (num) {
  let ans = false;

  for (let i = 0; i <= num; i++) {
    if (i * i == num) {
      ans = true;
    }
    if (i * i > num) {
      break;
    }
  }
  return ans;
};

console.log(isPerfectSquare(16));
