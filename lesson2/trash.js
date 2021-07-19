/*Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи*/
// *Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи*/
/*Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи*/

/*let mass = [1 , 22, 3, -98, 'tar', 'bar', 'sar', true , false, true];
if (typeof mass[i] === "string"){
 console.log (mass[i])
    }*//*не вышло*/

//Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write//єто тоже что и ниже
/*let mass = [1 , 22, 3, -98, 'tar', 'bar', 'sar', true , false, true];
for (let i=0; i < 100; i+=2 ){
    console.log (mass[i]); document.write (`${mass[i]}`)
}*/
//не выходит document.write


// Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
/*let mass = [1 , 22, 3, -98, 'tar', 'bar', 'sar', true , false, true];
for (let i=0; i < 100; i++ ){if (i % 2===0) continue;
    console.log (mass[i]);document.write (mass[i])}*/
//не выходит document.write


/*Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write*/
/*let mass = [1 , 22, 3, -98, 'tar', 'bar', 'sar', true , false, true];
for (let i=0; i < 100; i++ ){if (i % 2===1) continue;
    console.log (mass[i]);document.write (mass[i]);}*/
//не выходит document.write прописать


// /*Дано 2 масиви з рівною кількістю об'єктів.
/*Масиви:
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
        },
    ]*/

/*
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

let ad= ['adress:'];
ad.push (citiesWithId[0],citiesWithId[1],citiesWithId[2],citiesWithId[3] )
/*console.log(ad);*/
/*usersWithId.push [ad];
console.log(usersWithId);*/
/*document.write (`${usersWithId[0]},${usersWithId[1]},${usersWithId[2]},${usersWithId[3]},${usersWithId[4],${usersWithId[5]}`)*/


// console.log(usersWithId);
/*
usersWithId.push ([ad]);
console.log(usersWithId);*/


/*usersWithId.push ('address:');
// console.log(usersWithId);*/

// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     let citiesWithId = [
//         {user_id: 4, country: 'USA', city: 'Miami'}
//     ];


const usersWithAddress = [];
for (let i = 0; i < usersWithId.length; i++) {
    for (const address of citiesWithId) {
        if (usersWithId[i].id === address.user_id) {
            usersWithAddress.push({...usersWithId[i], address});
        }
    }
}
console.log(usersWithAddress);




