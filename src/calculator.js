#!/usr/bin/env node
// calculator.js - Node.js CLI Calculator
// Supports: Addition (+), Subtraction (-), Multiplication (×), Division (÷)

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculate(a, op, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  switch (op) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b !== 0 ? a / b : null;
    default: return null;
  }
}

function modulo(a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  return b !== 0 ? a % b : null;
}

function power(base, exponent) {
  base = parseFloat(base);
  exponent = parseFloat(exponent);
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  n = parseFloat(n);
  return n >= 0 ? Math.sqrt(n) : null;
}

module.exports = { calculate, modulo, power, squareRoot };

function prompt() {
  rl.question('Enter calculation (e.g. 2 + 2): ', (input) => {
    const match = input.match(/\s*([-+]?\d*\.?\d+)\s*([+\-*/])\s*([-+]?\d*\.?\d+)\s*/);
    if (match) {
      const [, a, op, b] = match;
      const result = calculate(a, op, b);
      console.log('Result:', result);
    } else {
      console.log('Invalid input. Format: number operator number');
    }
    prompt();
  });
}

console.log('Node.js CLI Calculator');
console.log('Supported operations: + (add), - (subtract), * (multiply), / (divide)');
prompt();
