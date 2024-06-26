// 1. Определение типов данных
let a = "Привет, Simbirsoft";
let b = 2022;
let c = true;
let d = "false";

console.log("a:", typeof a);
console.log("b:", typeof b);
console.log("c:", typeof c);
console.log("d:", typeof d); 

// 2. Сложение строк
let str1 = 'Привет, ';
let str2 = 'Мир!';
console.log(str1 + str2);

// 3. Вывод имени
let name = "Влад";
console.log(`Привет, ${name}!`);

// 4. Вывод возраста
let age = 18;
console.log(`Мне ${age} лет!`);

// 5. Доступ к символам строки
let str = 'abcde';
console.log(str[0]);
console.log(str[2]);
console.log(str[4]);

// 6. Вывод текущего времени
let hour = new Date().getHours();
let minute = new Date().getMinutes();
let second = new Date().getSeconds();
console.log(`${hour}:${minute}:${second}`);

// 7. Квадратный корень
let number = 25;
let squareRoot = Math.sqrt(number);
