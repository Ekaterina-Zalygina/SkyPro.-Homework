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
// if (c > 0 && c < 10) {
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






//Домашняя работа 2.5

//Задание 1
// function numbers(a, b) {
//     if (a > b)
//     return b; 
//     else  
//     return a;
// }

// alert(numbers(8, 4))

//Задание 2
// function number(a) {
//     if (a % 2 == 0) {
//         console.log('Число четное');
//         return a;
//     }
//     else {
//         console.log('Число нечетное');
//         return a;
//     }
// }

//Задание 3.1
// function mult(a) {
//     console.log(a**2)
// }

//Задание 3.2
// function multe(a) {
//     return (a**2);
// }

//Задание 4
// let userAge = prompt('Сколько Вам лет?');
// if (userAge < 0) {
//     alert('Вы ввели неправильное значение');
// }
// if (userAge <= 12) {
//     alert('Привет, друг!')
// }
// else {
//     alert('Добро пожаловать!')
// }

//Задание 5
// function numbers(a, b) {
//     if(isNaN(a) || isNaN(b)) {
//         return 'Одно или оба значения не являются числом';
//     }
//     else {
//         return a * b;
//     }
// }

//Задание 6
// function multDate() {
//     let numb = prompt('Ввести число');
//     numb = Number(numb);
//     if (numb) {
//         return `${numb} в кубе равняется ${numb ** 3}`
//     }
//     else {
//         return 'Переданный параметр не является числом';
//     }
// }
// console.log(multDate());

//Задание 7 
// function getArea() {
//     return 3.14 * this.radius * this.radius;
// }

// function getPerimeter() {
//     return 2 * 3.14 * this.radius;
// }

// let circle1 = {
//     radius: 7,
//     getArea: getArea,
//     getPerimeter: getPerimeter
// }

// let circle2 = {
//     radius: 10,
//     getArea: getArea,
//     getPerimeter: getPerimeter
// }

// console.log(circle1.getArea());
// console.log(circle1.getPerimeter());
// console.log(circle2.getArea());
// console.log(circle2.getPerimeter());

//Задание 8
// function seasons(month) {
//     if (month == 1 || month == 2 || month == 12) {
//         return 'Зима'
//     }
//     if (month == 3 || month == 4 || month == 5) {
//         return 'Весна';
//     } 
//     if (month == 6 || month == 7 || month == 8) {
//         return 'Лето';
//     } 
//     if (month == 9 || month == 10 || month == 11) {
//         return 'Осень';
//     } 
//     else {
//         return 'Неверное значение';
//     };
// }
// alert(seasons(prompt('Введите данные')));







//Домашняя работа 2.6

//Задание 1
// const sum = [1, 5, 4, 10, 0, 3];
// for (let i = 0; i < sum.length; i++) {
//     console.log(sum[i]);
//     if (sum[i] === 10) {    
//         break;
//     }
// }

//Задание 2
// const number = [1, 5, 4, 10, 0, 3];
// number.forEach((el, index) => {
//     console.log(`el ${index}: index ${el}`);
// });

//Задание 3
// let number = [1, 3, 5, 10, 20];
// number = number.join(' ');
// console.log(number);

//Задание 4 
// let digit = [];
// for (let i = 0; i < 3; i++) {
//     let newDigit = [];
//     for (let p = 0; p < 3; p++) {
//         newDigit.push(1);
//     }
//     digit.push(newDigit);
// }
// console.log(digit);

//Задание 5
// let numbers = [1, 1, 1];
// numbers.push(2, 2, 2);
// console.log(numbers);

//Задание 6 
// let numbers = [9, 8, 7, 'a', 6, 5];
// numbers.sort((a, b) => a - b).pop();
// console.log(numbers);

//Задание 7 
// const numb = [9, 8, 7, 6, 5];
// let userNumbers = Number(prompt('Угадай число'));
// if (numb.includes(userNumbers)) {
//     alert('Угадал');
// }
// else {
//     alert('Не угадал');
// }

//Задание 8 
// let letters = 'abcdef';
// let newLetters = letters.split('').reverse('').join('');
// console.log(newLetters);

//Задание 9
// let numbers = [[1, 2, 3,],[4, 5, 6]];
// let newNumbers = numbers.flat();
// console.log(newNumbers);

//Задание 10 
// let numbers = [1, 2, 3, 5, 7];
// for (let i = 0; i < numbers.length - 1; i++) {
// console.log(numbers[i] + numbers[i + 1]);
// }

//Задание 11 
// function date(numbers) {
//     return numbers.map(numbers => numbers * numbers);
// }

//Задание 12
// function getLengthWords(words) {
//     return words.map(word => word < word.length)
// }

//Задание 13
// function filterPositive(array) {
//     let result = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < 0) {
//             result.push(array[i]);
//         }
//     }
//     return result;
// }
  
// filterPositive([-1, 0, 5, -10, 56]); // => [-1, -10]
// filterPositive([-25, 25, 0, -1000, -2]); // => [-25, -1000, -2]



//Домашняя работа 2.7
//Задание 1
// let str = 'js';
// str = str.toUpperCase();
// console.log(str);

//Задание 2
// function filterStrings (array, startStr) {
//     return array.filter(item => item.toLowerCase().startsWith(startStr.toLowerCase()));
// }
// console.log(filterStrings(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));

//Задание 3
// console.log(Math.floor(32.58884));
// console.log(Math.ceil(32.58884));
// console.log(Math.round(32.58884));

//Задание 4
// function numbers(minValue, maxValue) {
//     return Math.min();
// };
// console.log(Math.min(52, 53, 49, 77, 21, 32));

// function numbers(minValue, maxValue) {
//     return Math.max();
// };
// console.log(Math.max(52, 53, 49, 77, 21, 32));

//Задание 5
// function numbers(minValue, maxValue) {
//     return Math.random()*maxValue;
// };
// console.log(numbers(0, 10));

//Задание 6 (?????)
// function getRandomArrNumbers(number) {
//     let result = []; 
//     for (let i = 0; i < x / 2; i++) {
//         result.push(Math.floor(Math.random() * x))
//     }
//     return result
// }

//Задание 7 
// function (minValue, maxValue) {
//     return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue)
// }

//Задание 8
// const day = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
// const month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

// let myDate = new Date();
// let fullDate = myDate.getDate() + ' ' + month[myDate.getMonth()] + ' ' + myDate.getFullYear() + ' ' + day[myDate.getDay()];
// console.log(fullDate);

//Задание 9
// const day = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
// const month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

// let myDate = new Date(2024, 0, 73);
// let fullDate = myDate.getDate() + ' ' + month[myDate.getMonth()] + ' ' + myDate.getFullYear() + ' ' + day[myDate.getDay()];
// console.log(fullDate);

//Задание 10
// const day = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
// const month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

// let myDate = new Date();
// let fullDate = 'Дата: ' + myDate.getDate() + ' ' + month[myDate.getMonth()] + ' ' + myDate.getFullYear() + ' - это ' + day[myDate.getDay()];

// let fullTime = 'Время: ' + myDate.getHours() + ':' + myDate.getMinutes() + ':' + myDate.getSeconds()

// console.log(fullDate);
// console.log(fullTime);

//Задание 11
// let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
// fruits = list.sort(() => Math.random() - 0.5);
// alert(fruits)

// let oneAsk = prompt('Чему равнялся первый элемент массива?')
// let twoAsk = prompt('Чему равнялся последний элемент массива?')

// if (oneAsk === [0] && twoAsk === [6]) {
//     alert('Поздравляем, Вы угадали оба элемента')
// }
// if (oneAsk === [0] || twoAsk === [6]) {
//     alert('Вы были близки к победе!')
// }
// else {
//     alert('Вы не угадали ни одного элемента')
// }



//Домашняя работа 2.8

//Задание 1
// const people = [
//     { name: 'Глеб', age: 29 },
//     { name: 'Анна', age: 17 },
//     { name: 'Олег', age: 7 },
//     { name: 'Оксана', age: 47 }
//  ];
//  people.sort(function (a, b) {
//    if (a.age > b.age) {
//      return 1;
//    }
//    if (a.age < b.age) {
//      return -1;
//    }
//    if (a.age = b.age) {
//    return 0;
//    }
//  });
//  console.log(people);

//Задание 2
// function isPositive(num) {
//     return num > 0;
//     }

// function filter(arr, isPositive) {
//     let result = [];
//     arr.forEach((el) => {
//         if(isPositive(el)) {
//         result.push(el);
//         }
//     });
//     return result 
// }

// console.log(filter([3, -4, 1, 9], isPositive));


// function isMale(floor) {
//     return floor.gender === 'male';
// }

// function filter(people, isMale) {

//     let result = [];
//     people.forEach((el) => {
//         if(isMale(el)) {
//         result.push(el);
//         }
//     });
//     return result 
// }
    
// const people = [
//        {name: 'Глеб', gender: 'male'},
//        {name: 'Анна', gender: 'female'},
//        {name: 'Олег', gender: 'male'},
//        {name: 'Оксана', gender: 'female'}
// ];
    
// console.log(filter(people, isMale)); 

//Задание 3
// const timer = (deadline) => {
// 	let time = deadline;
// 	console.log(time);
// 	const interval = setInterval(() => {
// 		time -= 1;
//         console.log(new Date)
// 		console.log(time);
// 	}, 3000);


// 	setTimeout(() => {
//     clearInterval(interval);
//     console.log('Время истекло!')
//   }, deadline * 1000)
// };

// timer(30);

//Задание 4
// function delayForSecond(callback) {
//     alert('Привет, Глеб!');
//     setTimeout(delayForSecond, 1000);
//   callback();
// }

// delayForSecond(function () {
//   console.log('Привет, Глеб!');
// })

//Задание 5
// function delayForSecond(cb) {
//     setTimeout(() => {
//         console.log('Прошла одна секунда');
// 				if(cb) { 	cb(); }

//     }, 1000)
// }

// function sayHi (name) {
//     console.log(`Привет, ${name}!`);
// }

// // Код выше менять нельзя

// // Нужно изменить код ниже:
// delayForSecond(() => sayHi('Глеб'))