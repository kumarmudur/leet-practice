
// Topic: Arrays

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// time: O(N^2) | space: O(1)
const subarraySum = function(nums, k) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            if (sum === k) {
                result++;
            }
        }
    }
    console.log(result);
};

subarraySum([1, 1, 1], 2);