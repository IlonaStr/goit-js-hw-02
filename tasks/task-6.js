'use strict';

let input;
const numbers = [];
let total = 0;

do{
    input = prompt('Введите любое число');
    numbers.push(Number(input));
} while (input !== null);

if (numbers.length){
    for (let num of numbers){
    total += num;
}
}

console.log(`Общая сумма чисел равна ${total}`);