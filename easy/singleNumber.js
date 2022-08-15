// Topic: Array, Bit Manipulation

/**
 * @param {number[]} nums
 * @return {number}
 */
// Solution 1
// time: O(n) | space: O(1);
const singleNumber = function(nums) {
    let output = 0;
    for (let i = 0; i < nums.length; i++) {
        output ^= nums[i];
    }
    return output;
};


console.log(singleNumber([4,1,2,1,2]));

