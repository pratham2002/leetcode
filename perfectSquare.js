var isPerfectSquare = function (num) {
  let low = 1,
    high = num;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (mid * mid == num) {
      return true;
    } else if (mid * mid > num) {
      high = mid - 1;
    } else if (mid * mid < num) {
      low = mid + 1;
    }
  }

  return false;
};

console.log(isPerfectSquare(14));
