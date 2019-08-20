/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
    return "";
  }
  strs.sort((a, b) => {
    return a.length - b.length;
  });

  const short_str = strs[0];
  let common_prefix_idx = short_str.length;

  strs.forEach(str => {
    while (str.indexOf(short_str.substring(0, common_prefix_idx)) !== 0) {
      if (common_prefix_idx === 0) {
        break;
      }
      common_prefix_idx--;
    }
  });
  return short_str.substring(0, common_prefix_idx);
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
