// Topic: Math, Simulation
// Input: num = 4 => 2
// Input: num = 30 => 14

const digitSum = (num) => {
    let sum = 0;
    while (num) {
        sum += num % 10;
        num = Math.trunc(num / 10);
    }
    return sum;
}

/**
 * @param {number} num
 * @return {number}
 */
const countEven = function(num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        count += digitSum(i) % 2 === 0;
    }
    return count;
};

countEven(30);