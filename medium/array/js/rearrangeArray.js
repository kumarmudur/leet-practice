


/**
 * @param {number[]} nums
 * @return {number[]}
 */
const rearrangeArray = function(nums) {
    let result = [];
    let resultPos = [];
    let resultNeg = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            resultPos.push(nums[i]);
        } else {
            resultNeg.push(nums[i]);
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            nums[i] = resultPos[i];
        } else {
            nums[i] = resultNeg[i];
        }
    }


    console.log('resultPos...', resultPos);
    console.log('resultNeg...', resultNeg);

    console.log('nums....', nums);
};

rearrangeArray([3,1,-2,-5,2,-4]);