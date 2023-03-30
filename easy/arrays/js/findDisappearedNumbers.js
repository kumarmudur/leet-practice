// Topics: Array, Map

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Solution 1
// time: O(N) | space: O(N) 
const findDisappearedNumbers = function(nums) {
    let map = {};
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = true;
    }

    for (let i = 1; i <= nums.length; i++) {
        if(!map[i]) result.push(i);
    }
    return result;
};