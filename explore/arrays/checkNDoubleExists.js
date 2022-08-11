// Topic: Array, Hash Table, Two Pointers, Binary search, Sorting
// Input: arr = [10,2,5,3] => true;
// Input: arr = [7,1,14,11] => true;
// Input: arr = [3,1,7,11] => false;
/**
 * @param {number[]} arr
 * @return {boolean}
 */
// Solution 1
// time: O(n^2) | space: O(n)
const checkIfExist = function(arr) {
    const hashMap = {};
    for (let i = 0; i < arr.length; i++) {
        console.log(hashMap);
        const current = arr[i];
        if(hashMap[current * 2] || hashMap[current / 2] === current) return true;
        hashMap[arr[i]] = arr[i] * 2;
    }
    return false;
};

console.log(checkIfExist([10,2,5,3]));