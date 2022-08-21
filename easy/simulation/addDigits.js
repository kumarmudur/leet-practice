// Topic: Math, Simulation, Number Theory

// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2 
// Since 2 has only one digit, return it.

// Input: num = 0
// Output: 0


/**
 * @param {number} num
 * @return {number}
 */
// Solution 1
const addDigits = function(num) {
  let newStr = num.toString().split('');
  if (newStr.length === 1) return newStr[0];

   function addDigitsValues(n) {
        let result = 0;
        
        for (let i = 0; i < n.length; i++) {
            result += Number(n[i]);
        }
        if (result.toString().split('').length === 1) { 
            return result; 
        } else {
          return addDigitsValues(result.toString().split(''));
        }
   }
  return addDigitsValues(newStr);
};

// Solution 2
const addDigits1 = function(num) {
    num = num.toString();
    let result = 0;
    for (let i = 0; i < num.length; i++) {
        result += Number(num[i]);
    }
    if (result.toString().length === 1) return result;
    else addDigits(result);
}


console.log(addDigits(89));