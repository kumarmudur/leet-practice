// Topic: Math, Dynamic Programming, Recursion, Memoization

/**
 * @param {number} n
 * @return {number}
 */

// Solution 1
// time: O(2^n) | space: O(n)
const fib = function(n) {
   if (n < 2) return n;
   return fib(n - 1) + fib(n - 2);
 };