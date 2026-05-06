const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const multiply = function(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator * currentValue);
};

const power = function(base, power) {
  if (power === 0) { return 1; }
  let result = base;
	for (let i = 1; i < power; i++) {
    result *= base;
  }
  return result;
};

const factorial = function(num) {
	if (num === 0) { return 1; }
  let result = 1;
  for (let i = num; i > 0; i--) {
    result *= i;
  }
  return result;
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
