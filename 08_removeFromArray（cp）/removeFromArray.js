const removeFromArray = function(a,...item) {
  //遍历item的同时筛选并更新a的复制数组
  let b=a;
  for(let i = 0;i<item.length;i++){
    b=b.filter(m=>m!==item[i]);
  }
  return b;
};
/*better solution:
const removeFromArray = function(a,...item) {
  //遍历a的元素搬运到一个新的空数组，满足不再item中的才搬运
  let b =[]
  a.forEach(itemIna=>{
    if(!item.includes(itemIna)) b.push(itemIna);
    })
  }
  return b;


*/
// Do not edit below this line
module.exports = removeFromArray;
