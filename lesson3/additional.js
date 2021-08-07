// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
/*function ry (a,b){
let sum = [];
for(let i = 0; i < a.length; i++){
    sum.push(a[i] + b[i]);

}console.log(sum);}
    let a=[1,2,3,4];
let b=[2,3,4,5];
let f = ry(a,b);*/

// Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
/*let array = ['a', 'b', 'c'];
let array2 = [1,2,3];
for (let i = 0; i < 1; i++) {
    const array2Element = array2[i];
    let newArr=array.concat(array2)
    console.log(newArr);
}*/

// Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
/*let p = [1,2,3];
let splice = p.splice(0,3,3,2,1)
console.log(p);*/

// Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
/*let g = [1,2,3];
let p = [4,5,6]
let newArray = g.concat(p);
console.log(newArray);*/

// Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
/*let g = [1,2,3];
g.unshift(4,5,6);
console.log(g);*/


// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].
// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].
// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c'].

// Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].
/*let g = [1,2,3,4,5];
g.shift(1,2,3);
g.shift(2);
g.shift(3);
console.log(g);*/

// Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].
/*let g = [1,2,3,4,5];
g.pop(3,4,5);
g.pop(4);
g.pop(5);
console.log(g);*/

// Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c'].
/*let g = [1,2,3,4,5];
let sp = g.splice(3,2,'a','b','c')
console.log(g);*/

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
///*let z = [2,17,13,6,22,31,45,66,100,-18];
//  i=0;
// while(i<z.length){i++;
//     if(z[i] % 2 ===0){
//         console.log(z[i]);
//     }};*/
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
/*let array = [1,2,3,4,5,6,7,8,9,-10];

for (let i = 0; i<1; i++) {
    let array2 = [];
    let newArr=array.concat(array2)
    console.log(newArr);
}*/


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
/*let array = [ 'a', 'b', 'c']
for (const arrayElement of array) {
    let arr=[]
    console.log (arr=array.join(''))
}*/
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
/*let array = [ 'a', 'b', 'c']
let i=0;let arr=[]
while (i<array.length){
    console.log (arr=array.join('')),i++
}*/
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
/*let array = [ 'a', 'b', 'c']
for (const arrayElement of array) {
    console.log (arr=array.join(''))
}*/


// 5Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
// Зберігаючи при цьому порядок не нульових значень.
//     Двожина масиву від 2 до 100
// EXAMPLE:
//     [1,0,6,0,3] => [1,6,3,0,0]
//     [0,1,2,3,4] => [1,2,3,4,0]
//     [0,0,1,0]   => [1,0,0,0]

/*function sorty (numbers){
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];

        if (number === 0){
       numbers.splice(i,1);
       numbers.push(0)}

        }console.log(numbers);}

let a = sorty([1,0,6,0,3])*/


/*Дано список імен.
let n1 = '    Harry       Potter      '
let n2 = '    Ron       Whisley      '
let n3 = '    Hermione       Granger      '
Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
let n1 = 'Harry Potter'
let n2 = 'Ron Whisley'
let n3 = 'Hermione Granger'*/

/*function normName (normaName = ''){
    let nName = normaName.trim()
    nName  = nName.split (' ')
    nName  = nName.filter (function(string) {
    if (string!==''){
    return true;}}); nName = nName.join(' ')
    console.log(nName);
    return nName
    }*/

/*   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
  EXAMPLE:
  foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
  foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
  foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]*/

/*function uk (arr=[],fromIndex, toIndex) {
    element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element)
    console.log(arr);
}
let array = uk(arr=[9,8,0,4], i=1,k=2);*/