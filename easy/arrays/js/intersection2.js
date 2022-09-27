// Topic: Array, Two Pointers, Hash Table, Binary Search, Sorting

// time: O(n) | space: O(n) 
function intersection(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    
    let len1 = nums1.length;
    let len2 = nums2.length;
    let i = 0, j = 0, result = [];
    
    while (i < len1 && j < len2) {
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

// time: O(n) | space: O(n) 
function intersection2(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);

    let len1 = nums1.length;
    let len2 = nums2.length;
    let i = 0, j = 0;
    const set = new Set();
    const result = [];

    while(i < len1 && j < len2) {
        if (nums1[i] < nums2[j]) i++;
        else if (nums1[i] > nums2[j]) j++;
        else {
            set.add(nums1[i]);
            i++;
            j++;
        }
    }

    for (const item of set) result.push(item);
    return result;
}

intersection2([1,2,2,1], [2,2]);