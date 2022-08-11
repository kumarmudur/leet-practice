// Topic: Array

/**
 * @param {number[]} arr
 * @return {boolean}
 */
const validMountainArray = function(arr) {
    let index = 0, length = arr.length;

    //find the peak
    while(index < length && arr[index] < arr[index + 1]) index++;

    //edge cases
    if(index === 0 || index === length - 1) return false;

    //check if starting from peak to end of arr is descending order
    while(index < length && arr[index] > arr[index + 1]) index++;
    
    return index === length - 1;
};

console.log(validMountainArray([0,1,2,4,2,1]));