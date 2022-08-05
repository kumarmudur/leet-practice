// plus one 
// Topic: Array, Math
// Input: [1,2,3] => [1,2,4]
// Input: [4,3,2,1] => [4,3,2,2]
// Output: [9,9] => [1,0,0]


/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {
   let i = digits.length - 1;
   let val = 0;
   let carry = 1;
   while(i >= 0 && carry) {
    val = digits[i] + carry;
    carry = Math.floor(val / 10);
    digits[i] = val % 10;
    i--;
   }
   if (carry) digits.unshift(carry);
   return digits;
};

console.log(plusOne([9, 9]));