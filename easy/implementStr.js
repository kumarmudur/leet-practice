// implement string
// Topic: String, Two Pointers
// Input: haystack = "hello", needle = "ll" => 2
//Input: haystack = "aaaaa", needle = "bba" => -1

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

// time: O(n * m) | space: O(1)
const strStr = function(haystack, needle) {
    let len1 = haystack.length;
    let len2 = needle.length;
    if (!len2) return 0;
    for (let i = 0; i < len1; i++) {
        for (let j = 0; j < len2; j++) {
            if (i + j === len1) return -1;
            if (haystack[i+j] !== needle[j])  {
                break;
            }
            if (j === len2 - 1) return i;
        }
    }
    return -1;
};

console.log(strStr('hello', 'll'));