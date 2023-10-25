function runProgram(input) {
  // Write code here
  //   input = input.split("\n")
  // console.log(input)
  let arr = input.split(" ");
  let max = 0,
    min = 0;
  for (let i = 0; i < arr.length; i++) {
    let ele = arr[i];
    // console.log(ele)
    // console.log("\n")
    if (ele >= max) {
      max = ele;
    }
    if (ele < min) {
      min = ele;
    }
    console.log(ele);
    console.log(max);
    console.log(min);
    console.log("\n");
  }

  console.log(min);
  console.log(max);
}

runProgram("55 -5 -8 2 0 9 4 5 6 9 1");
