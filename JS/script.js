console.log('Задача №1');
//Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального
//поиска и замены.

let str1 = 'aaa@bbb@ccc';
let str1Result = str1.replace(/@/gi, '!');
console.log(str1Result);

console.log('---------------------------------------------');

console.log('Задача №2');
//В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту
//дату в формат 31/12/2025.

let date2 = '2025-12-31';
let date2New = date2.replace(/(2025)-(12)-(31)/gi, '$3/$2/$1');
console.log(date2New);

console.log('---------------------------------------------');
//let dateTask2='2025-12-31';
//let dateNewTask2=dateTask2.replace(/(2025)-(12)-(31)/g,'$3/$2/$1');
//console.log(dateNewTask2);
//console.log('-----------------------------------------');

console.log('Задача №3');
//Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово
//«javascript» тремя разными способами (через substr, substring, slice).

let str3 = 'Я учу javascript!';
//substring
let strSubstring1 = str3.substring(2, 5);
let strSubstring2 = str3.substring(6, 16);
console.log(strSubstring1);
console.log(strSubstring2);
//substr
let strSubstr1 = str3.substr(2, 3);
let strSubstr2 = str3.substr(6, 10);
console.log(strSubstr1);
console.log(strSubstr2);
//slice
let strSlice1 = str3.slice(2, 5);
let strSlice2 = str3.slice(6, 16);
console.log(strSlice1);
console.log(strSlice2);

console.log('---------------------------------------------');


console.log('Задача №4');
//Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень
//из суммы кубов его элементов. Для решения воспользуйтесь циклом for.

let arr4 = [4, 2, 5, 19, 13, 0, 10];
let sum4 = 0;
for (let i = 0; i < arr4.length; i++) {
   sum4 += (arr4[i] ** 3);// sum4 = Math.pow(arr4[i],3);
}
let result4 = Math.round(Math.sqrt(sum4));
console.log(result4);

console.log('---------------------------------------------');


console.log('Задача №5');
//Даны переменные a и b. Отнимите от a переменную b и результат
//присвойте переменной c. Сделайте так, чтобы в любом случае в переменную
//c записалось положительное значение. Проверьте работу скрипта при a и b,
//равных соответственно 3 и 5, 6 и 1.

let a = 3;
let b = 5;
let getNumber = function (a, b) {
   return (Math.abs(a - b))
}
let c = getNumber(a, b)
console.log(c);


console.log('---------------------------------------------');


console.log('Задача №6');
//Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
//Для решения этой задачи напишите функцию, которая будет добавлять 0
//перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014
//сделает 01.09.2014).

let date6 = new Date();
const option = {
   hour: 'numeric',
   minute: 'numeric',
   second: 'numeric',
   day: 'numeric',
   month: 'numeric',
   year: 'numeric'
}

let newDate6 = date6.toLocaleString('ru', option);
console.log(newDate6);//25.07.2022, 01:04:15
let newDate6Reverse = newDate6.replace(/(\d{2}\.\d{2}\.\d{4})(\,\s)(\d{2}\:\d{2}\:\d{2})/gi, '$3$2$1')
console.log(newDate6Reverse);

console.log('---------------------------------------------');


console.log('Задача №7');
//Дана строка 'aa aba abba abbba abca abea'.Напишите регулярку, которая
//найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое
//количество раз, буква 'a'.

let str7 = 'aa aba abba abbba abca abea';
let result7 = str7.match(/ab{1,}a/gi);//либо let result7 = str7.match(/ab+a/gi) + означает найти b любое количество раз.
console.log(result7);


console.log('---------------------------------------------');



console.log('Задача №8');
//Напишите ф-цию строгой проверки ввода номер телефона в
//международном формате (<код страны> <код города или сети> <номер
//телефона>). Функция должна возвращать true или false. Используйте
//регулярные выражения.

let phonNumber = prompt('Введите номер телефона', '+375 29 277-71-38');
let checkTel = /\+\d{3}\s\d{2}\s\d{3}\-\d{2}\-\d{2}/gi;//
let result8 = checkTel.test(phonNumber);
console.log(result8);

console.log('---------------------------------------------');