// Topic: Array
// Input: nums = [3,1,2,4] => [2,4,3,1]
// Input: nums = [0] => [0]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Solution1
// time: O(n) | space: O(n)
const sortArrayByParity = function(nums) {
    const queue = [];
    for (let i = 0; i < nums.length;) {
        if (nums[i] % 2 !== 0) {
            queue.push(nums[i]);
            nums.splice(i, 1);
        } else {
            i++;
        }
    }
    nums.push(...queue);
    return nums;
};

// Solution 2
// time: O(n) | space: O(n)
const sortArrayByParity1 = function(nums) {
    const queue = [];
    const results = [];
    for (let i = 0; i < nums.length; i++) {
         if (nums[i] % 2 !== 0) {
             queue.push(nums[i]);
         } else {
             results.push(nums[i]);
         }
     }
     results.push(...queue);
     return results;
}

console.log(sortArrayByParity([2,1,3,4]));