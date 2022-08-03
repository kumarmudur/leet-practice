// roman to integer conversion
// Topic: Hash Table, Math, String
// Input: s = "III" => 3
// Input: s = "LVIII" => 58


/**
 * @param {string} s
 * @return {number}
 */
// time: O(n) | Space: O(1)
const romanToInt = function(s) {
    const map = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000
    };

    let len = s.length;
    let i = 0;
    let res = 0;
    while (i < len) {
        if (map[s.substring(i, 2)]) {
            res += map[s.substring(i, 2)];
            i += 2;
        } else {
            res += map[s[i]];
            i += 1;
        }
    }
    return res;
};

romanToInt('LVIII');