const getRow = (rowIndex) => {
  const f = Array(rowIndex + 1).fill(1);
  for (let i = 2; i < rowIndex + 1; ++i) {
    for (let j = i - 1; j > 0; --j) {
      f[j] += f[j - 1];
    }
  }
  return f;
};

console.log(getRow(4));
