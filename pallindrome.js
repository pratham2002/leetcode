var isPalindrome = function (x) {
  x = `${x}`;
  let len = x.length;
  for (let i = 0; i < x.length / 2; i++) {
    if (x[i] !== x[len - 1 - i]) {
      return false;
    }
  }
  return true;
};
