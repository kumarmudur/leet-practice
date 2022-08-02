// Array and Two Pointers

// Input: nums = [1,2,3,1] : true
// Input: nums = [1,2,3,4] : false
// Input: nums = [1,1,1,3,3,4,3,2,4,2]: true

/**
 * @param {number[]} nums
 * @return {boolean}
 */

const containsDuplicate = function(nums) {
    const hash = {};
    for (const num of nums) {
        if (!hash[num]) hash[num] = true;
        else return true;
    }
    return false;
};
