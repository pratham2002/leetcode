var judgeSquareSum = function (c) {
  let map = {};
  for (let i = 0; i * i <= c; i++) {
    let value = i * i;
    map[value] = 1;
    if (map[c - value]) {
      return true;
    }
  }
  return false;
};

console.time("a");
console.log(judgeSquareSum(1000000000));
console.timeEnd("a");
