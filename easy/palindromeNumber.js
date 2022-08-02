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




console.log(isPalindrome(-121));