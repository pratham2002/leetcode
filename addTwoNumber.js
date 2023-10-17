var addTwoNumbers = function (l1, l2) {
  //   console.log(l1);
  //   console.log(l2);
  let s1 = "";
  let s2 = "";
  for (let i = l1.length - 1; i >= 0; i--) {
    s1 += l1[i];
    s2 += l2[i];
  }
  let sum = +s1 + +s2;
  return `${sum}`.split("");
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
