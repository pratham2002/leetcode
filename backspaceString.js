var backspaceCompare = function (s, t) {
  let stack1 = [];
  let stack2 = [];
  let backspaceChar = "#";

  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (element === backspaceChar) {
      stack1.pop();
    } else {
      stack1.push(element);
    }
  }
  for (let i = 0; i < t.length; i++) {
    const element = t[i];
    if (element === backspaceChar) {
      stack2.pop();
    } else {
      stack2.push(element);
    }
  }
  return stack1.join("") === stack2.join("");
};

console.log(backspaceCompare("ab##", "c#d#"));
