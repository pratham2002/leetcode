var twoSum = function (nums, target) {
  const m = {};
  for (let i = 0; ; ++i) {
    const x = nums[i];
    const y = target - x;
    if (m[y] !== undefined) {
      return [m[y], i];
    }
    m[x] = i;
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
