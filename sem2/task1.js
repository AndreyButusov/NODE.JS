// Задание 1
// Необходимо найти, установить и применить библиотеку, которая позволит
// избежать проблем со сложением и умножением чисел с плавающей запятой

const { calculateResultSum } = require('./calculateResultSum.js');
// const colors = 
require('colors');

const total = calculateResultSum([12.1, 32.2, 43.1], 0.9);
console.log(total);

console.log(total > 50 ? `${total}`.red : `${total}`.green);