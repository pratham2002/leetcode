var isValid = function (s) {
  const splitArr = s.split("");
  let stack = [];
  let hashMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  let temp = ["(", "{", "["];
  for (let i = 0; i < splitArr.length; i++) {
    let element = splitArr[i];
    if (temp.includes(element)) {
      stack.push(element);
    } else {
      if (stack.length == 0) {
        return false;
      }
      let lastElement = stack.pop();
      if (hashMap[element] !== lastElement) {
        return false;
      }
    }
  }
  return true;
};

console.log(isValid("(]"));
