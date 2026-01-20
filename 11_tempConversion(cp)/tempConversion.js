const convertToCelsius = function(a) {
  return Number(((a-32)/1.8).toFixed(1))
};

const convertToFahrenheit = function(a) {
  return Number((a*1.8+32).toFixed(1))
};
//better solution:  return Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;



// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
