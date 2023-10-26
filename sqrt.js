var mySqrt = function (x) {
  let ans = 0;
  for (let i = 1; i <= x; i++) {
    let val = i * i;
    if (val <= x) {
      ans = i;
    } else {
      break;
    }
  }
  return ans;
};

console.log(mySqrt(0));
