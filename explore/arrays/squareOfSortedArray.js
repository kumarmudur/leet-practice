Topic: Arrays
// Input: nums = [-4,-1,0,3,10] => [0,1,9,16,100]
// Input: nums = [-7,-3,2,3,11] => [4,9,9,49,121]

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

// Solution 2
// time: O(n) | space: O(n)
const sortedSquares1 = function(nums) {
    let results = []
    for (let i = 0; i < nums.length; i++) {
        results.push(squareOfNumber(nums[i]));
    }
    return results.sort((a, b) => a - b);
};

const squareOfNumber = num => num * num;

console.log(sortedSquares1([-4,-1,0,3,10]));