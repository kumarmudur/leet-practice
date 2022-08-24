// Topic: Array, HashTable, Divide & Conquer, Sorting, Counting
// Input: nums = [3,2,3] => 3
// Input: nums = [2,2,1,1,1,2,2] => 2

/**
 * @param {number[]} nums
 * @return {number}
 */
// solution 1
// time: O(n) | space: O(n)
const majorityElement = function(nums) {
    let majority = Math.trunc(nums?.length / 2);
    let map = {};
    for (let i = 0; i < nums.length; i++) {
       if (map[nums[i]]) map[nums[i]] += 1;
       else map[nums[i]] = 1;
    }
    for (let key in map) {
        if (map[key] > majority) {
            return key;
        }
    }
};

console.log(majorityElement([3,2,3]));
