// Topic: Array, Hash Table, Math, Binary Search, Bit Manipulation, Sorting

/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function(nums) {
    let n = nums.length;
    nums.sort((a, b) => a - b);
    let missingNum = -1;

    for (let i = 0; i <= n; i++) {
        if (nums[i] !== i) {
            return missingNum = i;
        }
    }
    return missingNum;
};

console.log(missingNumber([0,1]));