// Longest common prefix
// Topic: Array, String
// Input: ["flower","flow","flight"] => fl
// Input: ["dog","racecar","car"] => '';

/**
 * @param {string[]} strs
 * @return {string}
 */
// time: O(n^2) | space: O(1)
const longestCommonPrefix = function(strs) {
    if (strs.length === 0) return '';
    let len1 = strs.length;
    let len2 = strs[0].length;
    let temp = '';
    let res = '';
    outer: for (let i = 0; i < len2; i++) {
        temp = strs[0][i];
        inner: for (let j = 1; j < len1; j++) {
            if (strs[j][i] !== temp) break outer;
        }
        res += temp;
    }
    return res;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));