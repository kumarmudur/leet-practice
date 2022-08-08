// sqrt of number
// Topic: Two Pointers, String
// Input: "A man, a plan, a canal: Panama" => true
// Input: "race a car" => false
// Input: "" => true

/**
 * @param {string} s
 * @return {boolean}
 */

// time: 0(n) | space: O(n)
const isPalindrome = (s) => {  
    let left = 0;
    let right = s.length - 1;
    let m = '';
    let n = '';
    while (left < right) {
       m = s[left].toLowerCase();
       n = s[right].toLowerCase();
       if (!isLetterOrDigit(m)) left++; 
       else if (!isLetterOrDigit(n)) right--;
       else if (m === n) {
        left++;
        right--;
       } 
       else return false; 
    }
    return true;
};

const isLetterOrDigit = (c) => {
    return (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9');
};

console.log(isPalindrome('race a car'));