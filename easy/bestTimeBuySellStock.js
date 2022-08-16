// best time to buy and sell stock
// Topic: Array, Dynamic Programming
// Input: prices = [7,1,5,3,6,4] => 5
// Input: prices = [7,6,4,3,1] => 0

/**
 * @param {number[]} prices
 * @return {number}
 */
// time: O(n) | space | O(1)
const maxProfit = function(prices) {
    let n = prices.length;
    let minPrice = Number.MAX_SAFE_INTEGER;
    let maxProfit = 0;
    for (let i = 0; i < n; i++) {
        if (prices[i] < minPrice) minPrice = prices[i];
        else if (prices[i] - minPrice > maxProfit) maxProfit = prices[i] - minPrice;
    }
    return maxProfit;
};

