

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Solution 1
// time: O(n) | space: O(1)
const sortedSquares = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        nums[i] = squareOfNumber(nums[i]);
    }
    return nums.sort((a, b) => a - b);
};

const squareOfNumber = num => num * num;

console.log(sortedSquares1([-4,-1,0,3,10]));