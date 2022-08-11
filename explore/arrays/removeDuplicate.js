// Topic: Array


/**
 * @param {number[]} nums
 * @return {number}
 */
// Solution 
// time: O(n) | space: O(1)
const removeDuplicates = function(nums) {
    for (i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === nums[i - 1]) nums.splice(i, 1);
    } 
    return nums.length;
};
