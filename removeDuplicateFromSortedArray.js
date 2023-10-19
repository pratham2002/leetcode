var removeDuplicates = function (nums) {
  let k = 0;
  for (const x of nums) {
    if (k === 0 || x !== nums[k - 1]) {
      nums[k++] = x;
    }
  }
  return k;
};

console.log(removeDuplicates([1, 1, 2]));
