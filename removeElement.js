var removeElement = function (nums, val) {
  let k = 0;
  nums.forEach((element) => {
    if (element !== val) {
      nums[k++] = element;
    }
  });
  return k;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
