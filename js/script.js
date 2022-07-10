console.log('Задание №1');

let userName = prompt('Ваше имя?', 'Илья');
let age = +prompt('Ваш возраст?', '25');
let city = prompt('В каком городе вы живёте?', 'Минск');
let company = prompt('Место работы', '');
let phone = +prompt('Введите номер телефона', '');
let email = prompt('Введи email', '');
console.log(`Меня зовут ${userName}. Мне ${age}лет. Я проживаю в городе ${city} и работаю в компании ${company}. Мои контактные данные: ${phone}, ${email}.`);

console.log('-----------------------------------------------------------------------');

console.log('Задание №2');
let yearToday = 2022;
let yearOfBirth = yearToday - age;
console.log(`${userName} родился в ${yearOfBirth} году.`);

console.log('-----------------------------------------------------------------------');

console.log('Задание №3');
// 2 4 5 2 3 4
let
   a = 2,
   b = 4,
   c = 5,
   d = 4,
   e = 3,
   j = 4;

let leftNumber = a + b + c;
let rightNumber = d + e + j;
if (leftNumber == rightNumber) {
   console.log('да');
} else {
   console.log('нет');
}
console.log('-----------------------------------------------------------------------');

console.log('Задание №4');

if (a > 0) {
   console.log('Верно1!');
} else {
   console.log('Неверно');
}

console.log('-----------------------------------------------------------------------');

console.log('Задание №5');
a = 10;
b = 2;
sum = a + b;
console.log(sum);
let difference = a - b;
console.log(difference);
let multiplication = a * b;
console.log(multiplication);
let degree = a / b;
console.log(degree);

let sumOperation = sum + difference + multiplication + degree;
console.log(sumOperation);
switch (true) {
   case sumOperation > 1: console.log(sumOperation ** 2);
      break;
   default: console.log('сумма меньше 1');
}

console.log('-----------------------------------------------------------------------');

//a = 10;
//b = 2;
console.log('Задание №6');
if (a > 2 && a < 11 || b >= 6 && b < 14) {
   console.log('Верно!');
} else {
   console.log('Неверно');
}

console.log('-----------------------------------------------------------------------');

console.log('Задание №7');

let n = +prompt('Введите число от 0 до 59', '');

switch (true) {
   case n < 15:
      console.log('Число попало в первую четверть часа');
      break;
   case n < 30:
      console.log('Число попало во вторую четверть часа');
      break;
   case n < 45:
      console.log('Число попало в третью четверть часа');
      break;
   case n < 60:
      console.log('Число попало в четвертую четверть часа');
      break;
}

console.log('-----------------------------------------------------------------------');

console.log('Задание №8');

let day = +prompt('Введите число от 1 до 31', '25');
switch (true) {
   case day <= 10:
      console.log('Первая декада');
      break;
   case day > 10 && day <= 20:
      console.log('Вторая декада');
      break;
   default: console.log('Третья декада');
}

console.log('-----------------------------------------------------------------------');

console.log('Задание №9');
let day1 = +prompt('Введите число (день)');
let Year = 365;//Количество дней в году
let mounth = 31;//Дней в месяце
const week = 7; //Дней в неделе
const hour = 24;// Часов в дне
const minuts = 1440; // Минут в дне
const second = 86400; // Секунд в дне

let dayInYear = day1 / Year; //Переводим дни в года
let dayInMounth = day1 / mounth;//Переводим дни в месяца
let dayInWeek = day1 / week;//Переводим дни в недели
let dayInHour = day1 * hour;//Переводим дни в часы
let dayInMinuts = day1 * minuts;//Переводим дни в минуты
let dayInSecond = day1 * second;//Переводим дни в секунды

//console.log(`В ${day1} дне (днях) ${dayInYear} год (лет), ${dayInMounth} месяцев, ${dayInWeek} недель, ${dayInHour} часов, ${dayInMinuts} минут, ${dayInSecond} секунд, `);
//if (dayInYear < 1) {
//   console.log(`${day1} день Меньше года`);
//}
//if (dayInMounth < 1) {
//   console.log(`${day1} день Меньше месяца`);
//}
//if (dayInWeek < 1) {
//   console.log(`${day1} день Меньше недели`);
//}

if (dayInYear < 1) {
   alert(`В ${day1} дне меньше года`);
} else {
   alert(`В ${day1} ${dayInYear} лет (год)`);
}
if (dayInMounth < 1) {
   alert(`В ${day1} дне меньше месяца`);
} else {
   alert(`В ${day1} дне ${dayInMounth} месяц(ев)`);
}

if (dayInMounth < 1) {
   alert(`В ${day1} дне меньше недели(ль)`);
} else {
   alert(`В ${day1} дне ${dayInWeek} недели(ль)`);
}

alert(`В ${day1} дне ${dayInHour} час(ов)`);
alert(`В ${day1} дне ${dayInMinuts} минут`);
alert(`В ${day1} дне ${dayInSecond} секунд`);

console.log('-----------------------------------------------------------------------');

console.log('Задание №10');

//let day1 = +prompt('Введите число (день)'); из задания №9
let mounth10 = day1 / 31;
switch (true) {
   case mounth10 <= 1: alert(1 + " Месяц зима");
      break;
   case mounth10 <= 2 && mounth10 > 1: alert(2 + " Месяц зима");
      break;
   case mounth10 <= 3 && mounth10 > 2: alert(3 + " Месяц весна");
      break;
   case mounth10 <= 4 && mounth10 > 3: alert(4 + " Месяц весна");
      break;
   case mounth10 <= 5 && mounth10 > 4: alert(5 + " Месяц весна");
      break;
   case mounth10 <= 6 && mounth10 > 5: alert(6 + " Месяц лето");
      break;
   case mounth10 <= 7 && mounth10 > 6: alert(7 + " Месяц лето");
      break;
   case mounth10 <= 8 && mounth10 > 7: alert(8 + " Месяц лето");
      break;
   case mounth10 <= 9 && mounth10 > 8: alert(9 + "Месяц осень");
      break;
   case mounth10 <= 10 && mounth10 > 9: alert(10 + " Месяц осень");
      break;
   case mounth10 <= 11 && mounth10 > 10: alert(11 + " Месяц осень");
      break;
   case mounth10 <= 12 && mounth10 > 11: alert(12 + " Месяц зима");
      break;
}
