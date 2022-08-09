// Topic: Array, Matrix

// Input: accounts = [[1,5],[7,3],[3,5]] => 10
// Input: accounts = [[2,8,7],[7,1,3],[1,9,5]] => 17

/**
 * @param {number[][]} accounts
 * @return {number}
 */

// Solution 1 
// time: O(n * m) | space: O(n);
const maximumWealth = function(accounts) {
    let result = [];
    for (let i = 0; i < accounts.length; i++) {
        let sum = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            sum += accounts[i][j];
        }
        result.push(sum);
    }
    return Math.max(...result);
};

// Solution 2
// time: O(n * m) | space: O(1)
const maximumWealth1 = function(accounts) {
    let maxWealthSoFar = 0;
    for (let customer of accounts) {
        let currentCustomerWealth = 0;
        for (bank of customer) {
            currentCustomerWealth += bank;
        }
        maxWealthSoFar = Math.max(maxWealthSoFar, currentCustomerWealth);
    }
    return maxWealthSoFar;
}

console.log(maximumWealth([[1,5],[7,3],[3,5]]));