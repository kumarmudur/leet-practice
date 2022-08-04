// valid parentheses
// Topic: String, Stack
// Input: s = "()" => true
// Input: s = "()[]{}" => true
// Input: s = "(]" => false;

/**
 * @param {string} s
 * @return {boolean}
 */
// time : O(n) | space : O(n)
const isValid = function(s) {
    const stack = [];
    const length = s.length;
    const map = {
        '(' : ')',
        '[' : ']',
        '{' : '}',
    }

    for (let i = 0; i < length; i++) {
        const stackLength = stack.length;
        if (stackLength > 0 && map[stack[stackLength - 1]] === s[i]) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    return stack.length === 0;
};

console.log(isValid("()"));