const repeatString = function(string,times) {
  if(times<0) return 'ERROR'
  let a = '';
  for(let i =0;i<times;i++){
    a+=string;
  }
  return a;
};

// Do not edit below this line
module.exports = repeatString;
