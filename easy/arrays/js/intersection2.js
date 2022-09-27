// Topic: Array, Two Pointers, Hash Table, Binary Search, Sorting

// time: O(n) | space: O(n) 
function intersection(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    
    let i = 0, j = 0, result = [];
    
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) i++;
        else if (nums1[i] > nums2[j]) j++;
        else {
            result.push(nums1[i]);
            i++;
            j++;
        }
    }
    return result;
}

intersection([1,2,2,1], [2,2]);