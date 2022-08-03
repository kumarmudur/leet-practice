// Palindrome number
// Topic: Math 
// Input: 121 => true
// Input: -121 => false
// Input: 10 => false

/**
 * @param {number} x
 * @return {boolean}
 */

// Solution 1
const isPalindrome = function(x) {
    let num = x.toString();
    let revChar = '';
    for (let char of num) {
        revChar = char + revChar;
    }
    return revChar === num;
};

// time: O(log(n) | space: O(1)
const isPalindrome1 = function(x) {
    let str = '' + x;
    let left = 0;
    let right = str.length - 1;
    console.log(str);
    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
}

console.log(isPalindrome(-121));