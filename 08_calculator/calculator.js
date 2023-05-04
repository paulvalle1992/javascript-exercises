const add = (numOne, numTwo) => numOne + numTwo;


const subtract = (numOne, numTwo) => numOne - numTwo;


const sum = (sumArray) => sumArray.reduce((a, b) => a + b, 0);


const multiply = (multiplyArray) => multiplyArray.reduce((a, b) => a * b, 1);

const power = (a, b) => Math.pow(a, b);


const factorial = (n) => {if (n === 0) return 1;
let product = 1;
for (i = 1; i <= n; i++) {
  product *= i;}
  return product;
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
