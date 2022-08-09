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
    const results = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        results[i] = nums[i] + results[i - 1];
    }
    return results;
};

// solution 2
// time: O(n) | space: O(1)
const runningSum1 = function(nums) {
    let length = nums.length;
    for (i = 1; i < length; i++) {
        nums[i] += nums[i - 1];
    }
    return nums;
}

runningSum([3,1,2,10,1]);