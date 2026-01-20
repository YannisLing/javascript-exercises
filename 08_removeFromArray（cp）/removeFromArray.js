const removeFromArray = function(a,...item) {
  let b=a;
  for(let i = 0;i<item.length;i++){
    b=b.filter(m=>m!==item[i]);
  }
  return b;
};

// Do not edit below this line
module.exports = removeFromArray;
