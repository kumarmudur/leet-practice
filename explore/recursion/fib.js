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

// Solution 3
// Bottom-up Dynamic Programming
// time: O(n) | space: O(n)
const fib2 = (n) => {
    if (n < 2) return n;
    const dp = [0, 1];
    for (let i = 2; i <=n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}

// Solution 4
// Memory optimization
// time: O(n) | space: O(1)
const fib3 = (n) => {
    if (n < 2) return n;
    let n1 = 0, n2 = 1, temp;

    for (let i = 2; i <= n; i++) {
        temp = n1 + n2;
        n1 = n2;
        n2 = temp;
    }
    return n2;
}