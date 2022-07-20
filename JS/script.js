console.log('Задание №1');
//Сделайте функцию, которая отнимает от первого числа второе и делит на
//третье. Числа передаются параметром.
function getNumber1(a, b, c) {
   console.log((a - b) / c);

}
getNumber1(5, 1, 2);

console.log('-------------------------------------------------------------');


console.log('Задание №2');
//Сделайте функцию, которая возвращает куб числа и его квадрат. Число
//передается параметром.

function getNumber2(a) {
   console.log(a ** 3);
   console.log(a ** 2);
}

getNumber2(3);

console.log('-------------------------------------------------------------');


console.log('Задание №3');
//Напишите функции min и max, которые возвращают меньшее и большее из
//чисел a и b.

function min(a, b) {
   if (a < b) {
      console.log(`Минимальное число ${a}`);
      return a;
   } else {
      console.log(`Минимальное число ${b}`);
      return b;
   }
}

function max(a, b) {
   if (a > b) {
      console.log(`Максимальное число ${a}`);
      return a;
   } else {
      console.log(`Максимальное число ${b}`);
      return b;
   }
}
min(25, 39);
max(25, 50);

console.log('-------------------------------------------------------------');


console.log('Задание №4');
//Напишите две функции: первая ф-ция должна возвращать массив с
//числовыми значениями, диапазон которых должен вводиться пользователем
//с клавиатуры; вторая – выводить полученный массив.
let firstNumber = +prompt('Введите первое чило');
let lastNumber = +prompt('Введите последнее число');
function createArray(x, y) {
   let arr = [];
   for (let i = 0; i < y - 1; i++) {
      arr[i] = x;
      x++;
   }
   return arr;
}

function printArray(array) {
   console.log(array);
}
printArray(createArray(firstNumber, lastNumber));

console.log('-------------------------------------------------------------');


console.log('Задание №5');
//Сделайте функцию isEven() (even - это четный), которая параметром
//принимает целое число и проверяет: четное оно или нет. Если четное - пусть
//функция возвращает true, если нечетное — false.

function isEven(number) {
   return number % 2 === 0
}
let result5 = isEven(12);
console.log(result5);

console.log('-------------------------------------------------------------');


console.log('Задание №6');
//Напишите ф-цию, в которую передается массив с целыми числами.
//Верните новый массив, где останутся лежать только четные из этих чисел.
//Для этого используйте вспомогательную функцию isEven из предыдущей
//задачи.
let arr6 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr6New = []
let count6 = 0;
function getArrow6(array6) {
   for (let i = 0; i < arr6.length; i++) {
      if (isEven(arr6[i])) arr6New.push(arr6[i]);
   }
   console.log(arr6New);
}
getArrow6(arr6);

console.log('-------------------------------------------------------------');

console.log('Задание №7');
//Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные циклы):

function getNumber7(number) {
   for (let i = 1; i <= number; i++) {
      let strNumber7 = '';
      for (let x = 1; x <= i; x++) {
         strNumber7 += x;
      }
      console.log(strNumber7);
   }
}
getNumber7(9);


console.log('-------------------------------------------------------------');


console.log('Задание №9');
//Напишите ф-цию, которая возвращает массив заполненный числами
//Фибоначи от 0 до 1000.
function getNumber9() {
   let arr9 = [0, 1];

   for (let i = arr9.length; ; i++) {
      arr9.push(arr9[i - 1] + arr9[i - 2]);
      if (arr9[i] > 1000) break;
   }
   return arr9;
}
console.log(getNumber9());
console.log('-------------------------------------------------------------');

//const fTask9=function(){
//   let arrayTask9=[0,1];
//   for(let i=arrayTask9.length;;i++){

//       arrayTask9.push(arrayTask9[i-1]+arrayTask9[i-2]);

//       if(arrayTask9[i]>=1000){
//           //arrayTask9.pop();
//           break;
//       }
//   }
//   return arrayTask9;
//}

console.log('Задание №10');

//Дано число. Сложите его цифры. Если сумма получилась более 9-ти,
//опять сложите его цифры. И так, пока сумма не станет однозначным числом
//(9 и менее). Исп. Рекурсию.
function getNumber10(number) {
   let count10 = 0;
   let sum10 = 0;
   if (count10 < number.length) {
      sum10 = + number[count10];
      count10 += 1;
      getNumber10(number)
   } else {
      if (sum10 > 9) {
         getNumber10(sum10)
      }
   }

}


console.log('-------------------------------------------------------------');
