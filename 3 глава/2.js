// 1. Условие с двумя операторами сравнения
let a = 5; // Изменяйте значение a для проверки

if (a > 3 && a < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// 2. Условие с || (ИЛИ)
let a = 5; // Изменяйте значение a для проверки

if (a === 0 || a === 2) {
    a += 7;
} else {
    a /= 10;
}
console.log("Новое значение a:", a);

// 3. Switch-case
let num = 3; // Изменяйте значение num для проверки

let result;

switch (num) {
    case 1:
        result = 'зима';
        break;
    case 2:
        result = 'весна';
        break;
    case 3:
        result = 'лето';
        break;
    case 4:
        result = 'осень';
        break;
    default:
        result = 'Некорректное значение';
}
console.log(result);

// 4. Декада месяца
let day = 22; // Изменяйте значение day для проверки

let decade;

if (day <= 10) {
    decade = 'первая';
} else if (day <= 20) {
    decade = 'вторая';
} else {
    decade = 'третья';
}
console.log(`Число ${day} попадает в ${decade} декаду`);

// 5. Пора года
let month = 10; // Изменяйте значение month для проверки

let season;

switch (month) {
    case 12:
    case 1:
    case 2:
        season = 'зима';
        break;
    case 3:
    case 4:
    case 5:
        season = 'весна';
        break;
    case 6:
    case 7:
    case 8:
        season = 'лето';
        break;
    case 9:
    case 10:
    case 11:
        season = 'осень';
        break;
    default:
        season = 'Некорректное значение';
}
console.log(`Месяц ${month} - это ${season}`);

// 6. Проверка первого символа строки
let str = 'abcde'; // Изменяйте значение str для проверки

if (str[0] === 'a') {
    console.log('да');
} else {
    console.log('нет');
}