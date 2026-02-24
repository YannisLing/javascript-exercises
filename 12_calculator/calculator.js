const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(a) {
	return a.reduce((sum,item)=>sum+item,0);
};

const multiply = function(a) {
  return a.reduce((mul,item)=>sum*item,1);
};

const power = function(a,b) {
	return a**b
};

const factorial = function(a) {
  if(a<0||!Number.isInteger(a)){return -1}
  if(a===0){return 1}
  let i=1;
	for(a;a>0;a--){
    i*=a;
  }
  return i
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
