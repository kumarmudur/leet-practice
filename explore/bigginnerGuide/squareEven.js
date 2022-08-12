// Topic: Array, Math

// Solution 
// time: O(n) | space: O(1)
function squareEven(arr) {
    const length = arr.length;

    for (let i = 0; i < length; i++) {
        if (i % 2 === 0) {
            arr[i] = arr[i] * arr[i];
        }
    }
    return arr;
};

console.log(squareEven([9, -2, -9, 11, 56, -12, -3]));