// Topic: Math, String, Simulation
// Input: num1 = "11", num2 = "123" => "134"
// Input: num1 = "456", num2 = "77" => "533";
// Input: num1 = "0", num2 = "0" => "0"    

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = function(num1, num2) {
   let len1 = num1.length;
   let len2 = num2.length;
   let max = Math.max(len1, len2);
   let result = '';
   let carry = 0;
   let val = 0;
   for (let i = 0; i < max; i++) {
    val = Number(num1[len1 - 1 - i] || 0) + Number(num2[len2 - 1 - i] || 0) + carry;
    carry = Math.floor(val / 10);
    result = val % 10 + result;
   }
   return (carry || '') + result;
};

console.log(addStrings('11', '123'));
