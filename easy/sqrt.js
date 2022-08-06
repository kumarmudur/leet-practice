// sqrt of number
// Topic: Math, Binary Search
// Input: x = 4 => 2
// Input: x = 8 => 2

/**
 * @param {number} x
 * @return {number}
 */

// Solution 1
const mySqrt = function(x) {
    if (x < 2) return x;
    let left = 1;
    let right = x;
    let mid = 0;
    while (left <= right) {
        mid = left + Math.floor((right - left) / 2);
        if (mid > x / mid) {
            right = mid - 1;
        } else if ((mid + 1) > x /(mid + 1)) {
            return mid;
        } else {
            left = mid + 1;
        }
    }
}

// Solution 2
const mySqrt1 = function(x) {
    return Math.floor(Math.sqrt(x));
};

console.log(sqrt(4));