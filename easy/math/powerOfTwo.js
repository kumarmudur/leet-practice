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

// Solution 2
// time: O(log n) | space: O(log n)
const isPowerOfTwo1 = function(n) {
    if ( n > 1) return isPowerOfTwo1(n /2);   
    if (n === 1) return true;
    if (n < 1) return false;
};

console.log(isPowerOfTwo1(4));