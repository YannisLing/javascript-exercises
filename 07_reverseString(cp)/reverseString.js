const reverseString = function(string) {
  let a = '';
  for(let i =string.length-1;i>=0;i--){
    a+=string[i];
  }
  return a;
  //better solution:  return string.split("").revers().join("");
};

// Do not edit below this line
module.exports = reverseString;
