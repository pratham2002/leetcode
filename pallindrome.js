var isPalindrome = function (x) {
  x = `${x}`;
  let rev = "";
  for (let i = x.length - 1; i >= 0; i--) {
    rev = rev + x[i];
  }
  return rev === x;
};

console.log(isPalindrome(-121));
