// Topic: String

var reverseString = function(s) {    
   const str = [...s];
   let length = s.length - 1;
   for(let i = 0; i < s.length; i++) {
        s[i] = str[length];
        length--;
   }    
   return s;
};

reverseString(["h","e","l","l","o"]);