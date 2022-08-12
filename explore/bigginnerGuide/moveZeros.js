// Topic: Array,

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Solution 1
// time: O(n) | space O(n)
const moveZeroes = function(nums) {
    const results = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            results.push(nums[i]);
        }
    }

    let diffLength = nums.length - results.length;

    for (let i = 0; i < diffLength; i++) {
        results.push(0);
    }

    return results;
};

// Solution 2
// time: O(n) | space O(1)
const moveZeroes1 = function (nums) {
    let count = 0;
    for(let i = 0; count < nums.length; i++) {
        if(!nums[i]) {
            nums.splice(i,1);
            nums.push(0);
            i--;
        }
        count++;
    }
}

moveZeroes1([0,1,0]);

