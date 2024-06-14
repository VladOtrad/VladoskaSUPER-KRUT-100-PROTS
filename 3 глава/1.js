// 1. Определение типов данных
let a = "Привет, Simbirsoft";
let b = 2022;
let c = true;
let d = "false";

console.log("a:", typeof a); // Вывод: "a: string"
console.log("b:", typeof b); // Вывод: "b: number"
console.log("c:", typeof c); // Вывод: "c: boolean"
console.log("d:", typeof d); // Вывод: "d: string"

// 2. Сложение строк
let str1 = 'Привет, ';
let str2 = 'Мир!';
console.log(str1 + str2); // Вывод: "Привет, Мир!"

// 3. Вывод имени
let name = "Влад";
console.log(`Привет, ${name}!`); // Вывод: "Привет, Ваше имя!"

// 4. Вывод возраста
let age = 18;
console.log(`Мне ${age} лет!`); // Вывод: "Мне 25 лет!"

// 5. Доступ к символам строки
let str = 'abcde';
console.log(str[0]); // Вывод: "a"
console.log(str[2]); // Вывод: "c"
console.log(str[4]); // Вывод: "e"

// 6. Вывод текущего времени
let hour = new Date().getHours();
let minute = new Date().getMinutes();
let second = new Date().getSeconds();
console.log(`${hour}:${minute}:${second}`); // Вывод: "час:минута:секунда"

// 7. Квадратный корень
let number = 25;
let squareRoot = Math.sqrt(number);
console.log(squareRoot.toFixed(3)); // Вывод: "5.000"