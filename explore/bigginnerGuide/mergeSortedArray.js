/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// Solution 1
// time: O(m + n) | space: O(1) 
const merge = function(nums1, m, nums2, n) {
    if (m !== 0) nums1.splice(m, nums1.length - m);
    
    if (n !== 0) nums2.splice(n, nums2.length - n);
    
    m === 0 && nums1.length >= 1 ? nums1.length = 0 : null;
    n === 0 && nums2.length >= 1 ? nums2.length = 0 : null;
    
    nums2.forEach((num) => nums1.push(num));
    nums1.sort((a, b) => a - b);
    return nums1;
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));