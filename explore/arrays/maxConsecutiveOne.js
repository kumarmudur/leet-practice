// Topic: Array
// Input: nums = [1,1,0,1,1,1] => 3;
// Input: nums = [1,0,1,1,0,1] => 2

/**
 * @param {number[]} nums
 * @return {number}
 */
// Solution 1
// time: O(n) | space: O(1)
const findMaxConsecutiveOnes = function(nums) {
    let numOfConsecutiveOne = 0;
    let maxConsecutiveOne = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1 ) {
            numOfConsecutiveOne++;
            if (maxConsecutiveOne < numOfConsecutiveOne) {
                maxConsecutiveOne++;
            }
        } else {
            numOfConsecutiveOne = 0;
        }
    }
    return maxConsecutiveOne;
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));