
function maximumDeletionString(str) {
    let len = str.length / 2;
    console.log("len", len);
    let newStr = str.slice(0, len);

    let count = 0;

    console.log("newStr", newStr);
    for (let i = 0; i < str.length - 1; i++) {
      if (str[i] === newStr[i]) {
        count++;
        console.log("count", count);
      }
    }
}

maximumDeletionString("abcabcdabc");
