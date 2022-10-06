// Topic: String

/**
 * @param {string} s
 * @return {number}
 */

// time: O(n) | space: O(1)
const countSegments = function(s) {
    return s.split(' ').filter(Boolean).length;
};

console.log(countSegments("Hello World"));
