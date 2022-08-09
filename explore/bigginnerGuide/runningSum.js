// running sum
// Topic: Array, Prefix Sum
// Input: [1,2,3,4] => [1,3,6,10]
// Input: [3,1,2,10,1] => [3,4,6,16,17]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Solution 1 
// time: O(n) | space: O(n)
const runningSum = function(nums) {
    const result = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        result[i] = nums[i] + result[i - 1];
    }
    return result;
};

runningSum([3,1,2,10,1]);