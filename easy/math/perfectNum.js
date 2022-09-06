// Topic: Math

/**
 * @param {number} num
 * @return {boolean}
 */
const checkPerfectNumber = (num) => {
    if (num <= 1) return false;
    let divisorSum = 0;

    for (let i = 0; i < Math.floor(Math.sqrt(num)); i++) {
        if (num % i === 0) divisorSum += i + num / i;
    }
    
    return divisorSum === 2 * num ? true : false;
};

console.log(checkPerfectNumber(6));