const sumAll = function(a,b) {
  if(a<0||b<0||!Number.isInteger(a)||!Number.isInteger(b)) return "ERROR"
  if(a===b) return a;
  return (a+b)*(Math.abs(a-b)+1)/2//上底加下底乘以高除以2（等差数列求和） great!!
};

// Do not edit below this line
module.exports = sumAll;
