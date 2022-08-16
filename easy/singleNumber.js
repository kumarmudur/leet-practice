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
        console.log(output);
    }
    return output;
};

// Solution 2
// time: O(n) | space: O(n)
const singleNumber1 = function(nums) {
    if(nums.length === 0) return false;
    if(nums.length === 1) return nums[0];

    let counter = {};
    for (let i = 0; i < nums.length; i++) {
        counter[nums[i]] ? counter[nums[i]] += 1 : counter[nums[i]] = 1;
    }

    for (let key in counter) {
        if (counter[key] === 1) return key;
    }
}

console.log(singleNumber([4,1,2,1,2]));

