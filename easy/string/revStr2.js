//Topic: String, Two Pointers

//Input: s = "abcdefg", k = 2 => bacdfeg
//Input: s = "abcd", k = 2 => bacd


/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reverseStr = (s, k) => {
    const c = s.split('');
    for (let i = 0; i < s.length; i=i+(2*k)) {
        let start = i, end = Math.min(i + k - 1, c.length - 1);
        while (start < end) {
            let temp = c[start];
            c[start++] = c[end];
            c[end--] = temp;
        }
    }
    return c.join('');
};

console.log(reverseStr('abcdefg', 2));