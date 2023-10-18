var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  let i = 0;
  let ans = 0;
  for (let j = 0; j < s.length; ++j) {
    while (set.has(s[j])) {
      set.delete(s[i++]);
    }
    set.add(s[j]);
    ans = Math.max(ans, j - i + 1);
  }
  return ans;
};
