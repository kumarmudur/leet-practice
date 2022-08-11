Topic: Array

// Solution
function addElements(n) {
    let length = 0;
    let results = [];
    for (let i = 0; i < n; i++) {
        results[length] = i;
        length++;
    }
    return results;
}

console.log(addElements(5));