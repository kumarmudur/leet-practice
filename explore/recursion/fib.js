// Topic: Math, Dynamic Programming, Recursion, Memoization

/**
 * @param {number} n
 * @return {number}
 */

// Solution 1
// time: O(2^n) | space: O(n)
const fib = (n) => {
   if (n < 2) return n;
   return fib(n - 1) + fib(n - 2);
 };

 // Solution 2
 // Top-down Dynamic Programming with Memoization
const fib1 = (n) => {
    const memoize = [];

    function calculateFib(n) {
        if (n < 2) return n;

        if (memoize[n]) return memoize[n];

        memoize[n] = calculateFib(n - 1) + calculateFib(n - 2);
        return memoize[n];
    }
    return calculateFib(n);
}