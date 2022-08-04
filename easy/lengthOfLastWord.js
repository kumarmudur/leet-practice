// length of last word
// Topic: String
//Input: s = "Hello World" => 5
//Input: s = "   fly me   to   the moon  " => 4
/**
 * @param {string} s
 * @return {number}
 */
// time : O(n) | space : O(1)
const lengthOfLastWord = function(s) {
    const str = s.trim();
    const len = str.length;
    let i = len - 1;
    while(i >= 0 && str[i] !== ' ') i--;
    return len - 1 - i;
};

// time : O(n) | space : O(1)
const lengthOfLastWord1 = function(s) {
    const newStr = s.trim();
    const str = newStr.split(" ");
    return str[str.length - 1].length;
};

console.log(lengthOfLastWord('Hello World '));