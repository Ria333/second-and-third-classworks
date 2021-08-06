// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.

/*let massive = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
i = 0;
while (i < massive.length) {
    console.log(massive[i]), i++;
}*/
/*for (let j = 0; j < massive.length; j++) {

    console.log(massive[j])
}*/
/*let massive = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
i = 0;
let neparn = [];
while (i < massive.length) {
    i++;
    if (i % 2 !== 0) {
        neparn.push(i);
        console.log(neparn);
    }
}*/
// перебрати циклом for та вивести  числа тільки з непарним індексом
/*let massive = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let j = 0; j < massive.length; j++) {
    let neparn = [];
    if (j % 2 !== 0) {
        neparn.push(j);
        console.log(neparn);
}}*/

// перебрати циклом while та вивести  числа тільки парні  значення
/*let massive = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
i = 0;
let neparn = [];
while (i < massive.length) {
    i++;
    if (i % 2 === 0) {
        neparn.push(i);
        console.log(neparn);
    }
}*/
// перебрати циклом for та вивести  числа тільки парні  значення
/*let massive = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let j = 0; j < massive.length; j++) {
    let neparn = [];
    if (j % 2 === 0) {
        neparn.push(j);
        console.log(neparn);
    }}*/
// замінити кожне число кратне 3 на слово "okten"
/*let massive = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let j = 0; j < massive.length; j++) {

    if (massive[j]%3===0){
       // +j.toString('okten')
        massive[j]='okten'}
       // massive[j].replaceAll('massive[j]', 'okten')
       console.log(massive[j])
}*/
// вивести масив в зворотньому порядку.

/*let massive = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
massive.reverse();
console.log(massive);     */


// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// 2. Вивести за допомогою console.log кожен третій елемен
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

/*let emptyArray =[];

for (let i = 0; i < 100; i++) {
     if (i % 2 ===0) {
         emptyArray.push (i);
        }
}
console.log(emptyArray);*/
/*let emptyArray =[];

for (let i = 0; i < 100; i++) {
    if (i % 2 !==0) {
        emptyArray.push (i);
    }
}
console.log(emptyArray);*/

/*for (let i = 0; i < 20; i++) {
    let emptyArray = Math.floor(Math.random() * 100);
        console.log(emptyArray);
}*/

/*for ( let i = 0; i < 20; i++) {
    let min = 8;  let max = 732;
    console.log ( Math.floor(Math.random() * (max - min + 1)) + min);
}*/

/*let massive = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for ( let i = 2; i < massive.length; i+=2) {
    let k=[]
    k.push(massive[i])
    console.log(k);
}*/

/*let massive = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for ( let i = 2; i < massive.length; i+=2) {
    if (massive[i]%2===0){
    let k=[]
    k.push(massive[i])
    console.log(k);
}}*/

/*let a = [1,2,3,5,7,9,56,8,67];
for (let i = 0; i < a.length; i++) {
   if (a[i] % 2 ===0){
   console.log (a[i-1])
}}*/

/*let array =[100,250,50,168,120,345,188];
let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum=sum+array[i]/array.length
}
console.log(sum);*/

/*for (let i = 0; i < 20; i++) {
    let a=[];
    let emptyArray = Math.floor(Math.random() * 100);
    let array=emptyArray*5;
    a.push(array)
    console.log(a);
}*/
/*let array = [5,'ok',true,-9];
for (let i = 0; i < array.length; i++) {
    let arr=[];
    if(typeof array[i]=== 'number'){
        arr.push(array[i]);
        console.log(arr);
    }
}*/

/*- Дано 2 масиви з рівною кількістю об'єктів.
Масиви:
    let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
    Записати цей об'єкт в новий масив
Example:
    let usersWithCities = [
        {
            id: 1, // <===
            name: 'vasya',
            age: 31,
            status: false,
            address: {
                user_id: 1, // <===
                country: 'Ukraine',
                city: 'Ternopil'
            }
        },]*/
/*let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

const usersWithAddress = [];
for (let i = 0; i < usersWithId.length; i++) {
    for (const address of citiesWithId) {
        if (usersWithId[i].id === address.user_id) {
            usersWithAddress.push({...usersWithId[i], address});
        }
    }
}
console.log(usersWithAddress);*/
