// Array, Two Pointers

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// Solution 1 
// time: O(n) | Space: O(1)
const removeElement = function(nums, val) {
    let len = nums.length;
    let count = 0;
    for (let i = 0; i < len; i++) {
        if (nums[i] !== val) nums[count++] = nums[i];
    }
    return count;
};

// Solution 2
const removeElement1 = function(nums, val) {
    const result = [];
    for (let num of nums) {
        if (num !== val) {
           result.push(num);
        } 
    }
    return result;
}

// Solution 3
const removeElement2 = function(nums, val) {
    return nums.filter(num => num !== val);
}

removeElement([3,2,2,3], 3);