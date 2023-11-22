//Домалняя работа 2.2

//1 задание
//let a = 10;
//let a = 20;
//alert(a);

//2 задание 
//let a = 2007;
//alert(a);

//3 задание 
//let a = 'Брендан Эйх';
//alert(a);

//4 задание
//let a = 10;
//alert(a-2);

//let a = 10;
//alert(a+2);

//let a = 10;
//alert(a*2);

//let a = 10;
//alert(a/2);

//5 задание 
//let a = 2;
//result = a**5;
//alert(result);

//6 задание
// let a = 9;
// let b = 2;
// result = a % b;
// alert(result); 

//7 задание
// let num = 1;
// num += 5;
// num -= 3;
// num *= 7;
// num /= 3;
// num += 1;
// num -= 1;
// alert(num);

//8 задание
// let age = prompt('Сколько Вам лет?');
// alert(age);

///9 задание

//0 пункт
// const user = {
//     name: 'Екатерина',
//     age: 23,
//     isAdmin: true
// }

//1 пункт
// user.cityOfResidence = 'Москва';

//2 пункт
// user.age = 24;

//3 пункт
// delete user.cityOfResidence;

//4 пункт
// let info = prompt('Какую информацию хотите узнать о пользователе?');
// alert(user[info]);

//10 задание 
// let name = prompt('Как Вас зовут?');
// alert('Привет, ${name}!');


//Домашняя работа 2.3

//Задание 1
// let password = 'пароль';
// let EnterPassword = prompt('Введите пароль');
// if (EnterPassword === '1234') {
//     console.log('Пароль введен верно');
// }
// else {
//     console.log('Пароль введен неправильно');
// }


//Задание 2
// let c = 24;
// if (c < 0 && c < 10) {
//     console.log('Верно');
// }
// else {
//     console.log('Неверно');
// }

//Задание 3
// let d = 5;
// let e = 8;
// if(d > 100 || e > 100) {
//     console.log('Верно');
// }
// else {
//     console.log('Неверно');
// }

//Задание 4
// let a = '2';
// let b = '3';
// alert(Number(a) + Number(b));

//Задание 5
// let monthNumber = 12;

// switch (monthNumber) {
//     case 1:
//     case 2:
//     case 12:
//         alert('Зима');
//         break;
//     case 3:
//     case 4:
//     case 5:
//         alert('Весна');
//         break;
//     case 6:
//     case 7:
//     case 8:
//         alert('Лето');
//         break;
//     case 9:
//     case 10:
//     case 11:
//         alert('Осень');
//         break;
//     default:
//         alert('Неверный месяц');
// }


// Домашняя работа 2.4

//Задание 1
// let i = 0;
// while(i<2) {
//     alert('Привет');
//     i++;
// }

//Задание 2
// for (let i = 1; i<=5; i++) {
//     alert('i');
// }

//Задание 3
// for (let i = 7; i<=22; i++) {
//     alert('i');
// }

//Задание 4
// const obj = {
//     'Коля' : '200',
//     'Вася' : '300',
//     'Петя' : '400',
// };
// for (let key in obj) {
//     alert(`${key} — зарплата ${obj[key]} долларов`)
// }

//Задание 5
// let n = 1000;
// let num = 0;

// while(n>50) {
//     n /=2;
//     num++;
// }

// console.log(n);
// console.log(num);

//Задание 6
// let friday = 5;
// for (let i = friday; i<=31; i+=7) {
//     alert('Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.')
// }