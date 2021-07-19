    /*--створити масив з:
- з 5 числових значень
- з 5 стічкових значень
- з 5 значень стрічкового, числового та булевого типу
- та вивести його в консоль*/


/*let mass = [1 , 22, 3, 0, -98, 'tar', 'bar', 'sar', 'nar', 'lar', true , false, true , false, true];
console.log (mass);*/

/*-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль*/

/*let kuraj = [];
kuraj [0] = 15;
kuraj [1] = 'turtle';
kuraj [2] = 'true';
console.log (kuraj);*/

/*За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині*/

/*let masses2 = ['hahdfoahsdfpashdpf\ihasdpf\ihaspdfhasp', 'hahdfoahsdfpashdpf\ihasdpf\ihaspdfhasp', 'hahdfoahsdfpashdpf\ihasdpf\ihaspdfhasp', 'hahdfoahsdfpashdpf\ihasdpf\ihaspdfhasp', 'hahdfoahsdfpashdpf\ihasdpf\ihaspdfhasp', 'hahdfoahsdfpashdpf\ihasdpf\ihaspdfhasp', 'hahdfoahsdfpashdpf\ihasdpf\ihaspdfhasp', 'hahdfoahsdfpashdpf\ihasdpf\ihaspdfhasp', 'hahdfoahsdfpashdpf\ihasdpf\ihaspdfhasp', 'hahdfoahsdfpashdpf\ihasdpf\ihaspdfhasp'];
for (let i=0; i < masses2.length; i++ ){
    let mass = masses2 [i];
    document.write(`<div>${mass}</div>`)
}*/


/* За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині*//*разница?может так?*/
/*let masses2 = ['hahd', 'sp', 'ihaspdfhasp', 'aspdfhasp', 'shdpf', 'pdfhasp', 'hdpf', 'ih', 'fpap', 'ihasdpfihaspdfhasp'];
for (let i=0; i < masses2.length; i++ ){
    document.write(`<div>${masses2[i]}</div>`)
}*/

/*За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.*/
/*let text = ['hjdf', 'ahre', 'uwe', 'pwe', 'jzlc', 'awpoi', 'iqowjd', 'coz', 'oasif', 'poxc', 'hjdf', 'ahre', 'uwe', 'pwe', 'jzlc', 'awpoi', 'iqowjd', 'coz', 'oasif', 'poxc'];
let i=0;
while (i<text.length) {
    document.write(`<h1>${text[i]} ${i}</h1>`);
    i++    }*/

/*
- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.*/ /*разница?*/











/*Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.*/
/*let mass3 = [10, 5, 56, 345, -10, -2, 3, 35, 97];
console.log (mass3);*/



/*Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.*/
/*let mass4 = ['10', '5', '56', '345', '-10', '-2', '3', '35', '97'];
console.log (mass4);*/


/*Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.*/
/*let mass5 = [1 , 22, 3, 0, -98, 'tar', 'bar', 'sar', true , false];
console.log (mass5);*/



/*Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.*/

/*let kuraj = [];
kuraj [0] = 15;
kuraj [1] = 'turtle';
kuraj [2] = 'true';
kuraj [3] = 'false';
kuraj [4] = 106;
kuraj [5] = 52;
kuraj [6] = 9;
kuraj [7] = 77;
kuraj [8] = -5;
kuraj [9] = 'dog';
console.log (kuraj);*/


// Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write*/
/*let mass = [1 , 22, 3, -98, 'tar', 'bar', 'sar', true , false, true];
for (let i=0; i < 10; i++ ){
 console.log (mass[i]);document.write (`${mass}`)};*/

//Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
/*let mass = [1 , 22, 3, -98, 'tar', 'bar', 'sar', true , false, true];
for (let i=0; i < 100; i++ ){
    console.log (mass[i]);document.write (`${mass}`)};*/

//Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write//єто тоже что и ниже
/*let mass = [1 , 22, 3, -98, 'tar', 'bar', 'sar', true , false, true];
for (let i=0; i < 100; i+=2 ){
    console.log (mass[i]); document.write (`${mass[i]}`)
}*/
//не выходит document.write


// Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
/*let mass = [1 , 22, 3, -98, 'tar', 'bar', 'sar', true , false, true];
for (let i=0; i < 100; i++ ){if (i % 2===0) continue;
    console.log (mass[i]);document.write (mass[i])}
//не выходит document.write


/*Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write*/
/*let mass = [1 , 22, 3, -98, 'tar', 'bar', 'sar', true , false, true];
for (let i=0; i < 100; i++ ){if (i % 2===1) continue;
    console.log (mass[i]);document.write (mass[i]);}*/
//не выходит document.write прописать
    //
    // /*Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи*/

    /*let mass = [1 , 22, 3, -98, 'tar', 'bar', 'sar', true , false, true];
    for(let i=0;i<mass.length; i++){
        if (typeof mass[i] === "boolean"){
            console.log (mass[i])
        }}*/

    /*Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи*/

    /*let mass = [1 , 22, 3, -98, 'tar', 'bar', 'sar', true , false, true];
    for(let i=0;i<mass.length; i++){
    if (typeof mass[i] === "string"){
     console.log (mass[i])
        }}*/


    // *Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи*/

    /*let mass = [1 , 22, 3, -98, 'tar', 'bar', 'sar', true , false, true];
    for(let i=0;i<mass.length; i++){
        if (typeof mass[i] === "number"){
            console.log (mass[i])
        }}*/


