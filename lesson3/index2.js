// створити функцію яка повертає найбільше число з масиву

/*function form() {
    let max = arguments[0];

    for (let argument of arguments) {

        if (max < argument) max = argument;
    }
    console.log(max);
}

form (15,98,155,3,45);*/


// - створити функцію яка повертає найменьше число з масиву

/*function form() {
    let min = arguments[0];

    for (let argument of arguments) {

        if (min > argument) min = argument;
    }
    console.log(min);
}

form (15,98,155,3,45);*/

// створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
/*function form() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const argument = arguments[i];

        sum = sum + argument
    }
    console.log(sum);}
form (5,55,555,5555)*/

// створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

/* function form() {
 let sum = 0;
 for (let i = 0; i < arguments.length; i++) {
     const argument = arguments[i];
     sum = sum + argument / arguments.length}
 console.log(sum);}
form (5,55,555,5555)*/

// створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//     Для виведення використати попередню функцію.

/*function a (){
for (let i=0, t=3; i<t; i++) {
    let arr = [];
    arr.push(Math.round(Math.random() * 100));
    console.log(arr);
}}
let b = a ();*/


// Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

/*
 const arr = [{name: 'Dima', age: 13}, {model: 'Camry'}];
 const b = [];
 function k (arr){

 for (let i=0; i<arr.length; i++){
 for (let key in arr[i]){
 b.push(key);}}return b;}

 const arrKeys = k(arr);
 console.log(arrKeys);*/

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
//
/*const list = [{name: 'Dima', age: 13}, {model: 'Camry'}]
const allKeys = [];
for (const object of list) {
    for (const objectKey in object) {
allKeys.push(object[objectKey]);
    }
}
console.log(allKeys);*/


