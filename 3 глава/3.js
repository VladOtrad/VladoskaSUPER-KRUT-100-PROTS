// 1.
const numbers = [3, -5, -2, 4, -8, 0];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0 && numbers[i] < 0) {
        sum += numbers[i];
    }
}
console.log("Сумма четных отрицательных элементов:", sum);

// 2.
const numbers2 = [10, -5, 3, 2, 0, -1, 8, 0, 10, 3];

let maxAbs = Math.abs(numbers2[0]);
for (let i = 1; i < numbers2.length; i++) {
    if (Math.abs(numbers2[i]) > maxAbs) {
        maxAbs = Math.abs(numbers2[i]);
    }
}
console.log("Максимальный по модулю элемент:", maxAbs);

// 3.
const numbers3 = [10, -5, 3, 2, 0, -1, 8, 0, 10, 3];

let positiveCount = 0;
let negativeCount = 0;

for (let i = 0; i < numbers3.length; i++) {
    if (numbers3[i] > 0) {
        positiveCount++;
    } else if (numbers3[i] < 0) {
        negativeCount++;
    }
}
console.log("Положительных:", positiveCount, "Отрицательных:", negativeCount);

// 4.
const numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Пример без одинаковых
// const numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1]; // Пример с одинаковыми

let hasDuplicates = false;
for (let i = 0; i < numbers4.length; i++) {
    for (let j = i + 1; j < numbers4.length; j++) {
        if (numbers4[i] === numbers4[j]) {
            hasDuplicates = true;
            break;
        }
    }
    if (hasDuplicates) {
        break;
    }
}
console.log("Есть ли одинаковые элементы?", hasDuplicates);

// 5.
const numbers5 = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];

let distinctCount = 0;
let seenNumbers = {}; 

for (let i = 0; i < numbers5.length; i++) {
    if (!seenNumbers[numbers5[i]]) {
        distinctCount++;
        seenNumbers[numbers5[i]] = true;
    }
}
console.log("Количество различных чисел:", distinctCount);

// 6.
function areArraysIdentical(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = [1, 2, 4];

console.log("arr1 и arr2 идентичны?", areArraysIdentical(arr1, arr2)); // true
console.log("arr1 и arr3 идентичны?", areArraysIdentical(arr1, arr3)); // false 