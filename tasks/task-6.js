'use strict';

let input;
const numbers = [];
let total = 0;

do{
    input = prompt('Введите любое число');
    numbers.push(Number(input));
} while (input !== null);

if (numbers.length, input !== null){
    for (let num of numbers){
    total += num;
} 
console.log(`Общая сумма чисел равна ${total}`);
} else if (input === null){
    console.log('Попробуйте еще раз ввести число');
}

