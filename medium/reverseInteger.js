// reverse integer
// Topic: Math
// Input: 123 => 321
// Input: -123 => -321
// Input: 120 => 21

/**
 * @param {number} x
 * @return {number}
 */
// time: O(log(n)) | space: O(n)
const reverseInt = function(x) {
   let INT_MAX = 2147483647;
   let INT_MIN = - INT_MAX - 1;
   let res = 0;
   let num = x;
   while (num !== 0) {
    res = (res * 10) + (num % 10);
    num = num > 0 ? Math.floor( num / 10 ) : Math.ceil( num / 10 );
    if (res > INT_MAX || res < INT_MIN) return 0;
   }
   return res;
};

const reverseInt1 = function(n) {
    const rev = n.toString().split('').reverse().join('');
    return parseInt(rev) * Math.sign(n);
}

console.log(reverseInt(-120));