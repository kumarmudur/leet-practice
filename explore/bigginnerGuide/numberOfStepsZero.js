// Topi: Math, Bit Manipulation
// Input: num = 14 => 6
// Input: num = 8 => 4

/**
 * @param {number} num
 * @return {number}
 */

const numberOfSteps = function(num) {
    let steps = 0;
    while(num > 0) {
        if (num % 2 === 0) {
            num /= 2;
            steps++;
        } else {
            num--;
            steps++;
        }
    }
    return steps;
};

console.log(numberOfSteps(14));