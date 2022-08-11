// Topic: Array

// time: O(n) | space O(1)
function linearSearch(arr, element) {
    if (arr.length === 0) return false;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === element) return true;
    }
    return false;
}