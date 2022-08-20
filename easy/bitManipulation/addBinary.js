// Topic: Math, String, Bit Manipulation, Simulation

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// Solution 1
const addBinary = function(a, b) {
    let result = '';
    let carry = 0;
    
    for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
        const sum = (+a[i] || 0) + (+b[j] || 0) + carry;
        result = sum % 2 + result;
        carry = Math.floor(sum / 2);
    }
    if (carry) result = '1' + result;
    return result;
};

console.log(addBinary('1010', '1011'));