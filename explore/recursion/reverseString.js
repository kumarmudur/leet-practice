// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// time: O(n) | space: O(n) 
const reverseString = function(s) {
    let length = s.length - 1;
    let newStr = [];
    for (let i = length; i >= 0; i--) {
        newStr.push(s[i]);
    }
    return newStr;
};

console.log(reverseString(["h","e","l","l","o"]));