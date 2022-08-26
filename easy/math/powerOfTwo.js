// Topic: Math, Bit Manipulation, Recursion
/**
 * @param {number} n
 * @return {boolean}
 */
// Solution 1
// time: O(1) | space: O(1)
const isPowerOfTwo = function(n) {
    if (n <= 0) return false;
    return ((n & (n-1)) == 0);    

};

console.log(isPowerOfTwo1(4));