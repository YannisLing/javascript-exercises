const palindromes = function (string) {
  const lowerStr = string.toLowerCase().replace(/[^\w\s]|_/g, "").replace(/\s+/g, "")//正则表达式
  const reverse = lowerStr.split('').reverse().join('');
  return reverse===lowerStr
};

// Do not edit below this line
module.exports = palindromes;
