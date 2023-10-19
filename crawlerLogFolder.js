var minOperations = function (logs) {
  let count = 0;

  logs.forEach((element) => {
    if (element === "../") {
      count > 0 && count--;
    } else if (element == "./") {
      //do nothing
    } else {
      count++;
    }
  });

  return count;
};

console.log(
  minOperations(["./", "wz4/", "../", "mj2/", "../", "../", "ik0/", "il7/"])
);
