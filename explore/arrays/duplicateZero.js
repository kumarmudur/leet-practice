// Topic: Array,
// Input: arr = [1,0,2,3,0,4,5,0] => [1,0,0,2,3,0,0,4]
// Input: arr = [1,2,3] => [1,2,3]

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */

// Solution 1
// time: O(n) | space: O(1)
const duplicateZeros = function(arr) {
    let length = arr.length;
    for (let i = 0; i < length; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 0, 0);
            console.log(arr.length);
            arr.splice(arr.length-1, 1);
            i++
        }
    }
   return arr;
};

// Solution 2 
// time: O(n) | space 0(n)
const duplicateZeros1 = function(arr) {
    const results = [];
    for (let i = 0; i < arr.length; i++) {
        if (results.length !== arr.length) {
            if (arr[i] === 0) {
                results.push(0, 0);
            } else {
                results.push(arr[i]);
            }
        }
    }
    return results;
}

console.log(duplicateZeros([1,0,2,3,0,4,5,0]));