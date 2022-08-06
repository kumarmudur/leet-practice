// search insert position
// Topic: Array, Binary Search
// Input: Input: [1,3,5,6], 5 => 2 
// Input: [1,3,5,6], 2 => 1
// Input: [1,3,5,6], 7 => 4
// Input: [1,3,5,6], 0 => 0

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
    let length = nums.length;
    let left = 0;
    let right = nums.length - 1;
    let mid = 0;
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            return mid;
        }
    }
    return (nums[mid] > target) ? mid : mid + 1;
};