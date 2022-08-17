// Topic: Hash Table, Math, Two Pointers

/**
 * @param {number} n
 * @return {boolean}
 */

// Solution 1
// time: O(n) | space: O(1)
const isHappy = function(n) {
    let map = {};
    let tmp = 0;

    if (n < 1) return false;

    while (n !== 1 && !map[n]) {
        map[n] = true;
        tmp = 0;

        while (n > 0) {
            tmp += Math.pow(n % 10, 2);
            n = Math.floor(n / 10);
        }
        n = tmp;
    }
    return n === 1;
};

console.log(isHappy(19));