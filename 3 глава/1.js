// 1. ����������� ����� ������
let a = "������, Simbirsoft";
let b = 2022;
let c = true;
let d = "false";

console.log("a:", typeof a);
console.log("b:", typeof b);
console.log("c:", typeof c);
console.log("d:", typeof d); 

// 2. �������� �����
let str1 = '������, ';
let str2 = '���!';
console.log(str1 + str2);

// 3. ����� �����
let name = "����";
console.log(`������, ${name}!`);

// 4. ����� ��������
let age = 18;
console.log(`��� ${age} ���!`);

// 5. ������ � �������� ������
let str = 'abcde';
console.log(str[0]);
console.log(str[2]);
console.log(str[4]);

// 6. ����� �������� �������
let hour = new Date().getHours();
let minute = new Date().getMinutes();
let second = new Date().getSeconds();
console.log(`${hour}:${minute}:${second}`);

// 7. ���������� ������
let number = 25;
let squareRoot = Math.sqrt(number);
