// Excel sheet column title
// Topic: String, Math
// Input: 1 => 'A'
// Input: 28 => 'AB'
// Input: 701 => 'ZY'

/**
 * @param {number} columnNumber
 * @return {string}
 */
// Solution 1
// time: O(log(n)) | space: O(1)
const convertToTitle = function(columnNumber) {
    let num = columnNumber;
    let tmp = 0;
    let res = '';

    while (num > 0) {
        tmp = num % 26;
        if (tmp === 0) tmp = 26;
        res = getChar(tmp) + res;
        num = (num - tmp) / 26;
    }
    return res;
};

const getChar = function(num) {
    let start = 'A'.charCodeAt(0);
    return String.fromCharCode(start + num - 1);
}

console.log(convertToTitle(701));