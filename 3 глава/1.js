// 1. ����������� ����� ������
let a = "������, Simbirsoft";
let b = 2022;
let c = true;
let d = "false";

console.log("a:", typeof a); // �����: "a: string"
console.log("b:", typeof b); // �����: "b: number"
console.log("c:", typeof c); // �����: "c: boolean"
console.log("d:", typeof d); // �����: "d: string"

// 2. �������� �����
let str1 = '������, ';
let str2 = '���!';
console.log(str1 + str2); // �����: "������, ���!"

// 3. ����� �����
let name = "����";
console.log(`������, ${name}!`); // �����: "������, ���� ���!"

// 4. ����� ��������
let age = 18;
console.log(`��� ${age} ���!`); // �����: "��� 25 ���!"

// 5. ������ � �������� ������
let str = 'abcde';
console.log(str[0]); // �����: "a"
console.log(str[2]); // �����: "c"
console.log(str[4]); // �����: "e"

// 6. ����� �������� �������
let hour = new Date().getHours();
let minute = new Date().getMinutes();
let second = new Date().getSeconds();
console.log(`${hour}:${minute}:${second}`); // �����: "���:������:�������"

// 7. ���������� ������
let number = 25;
let squareRoot = Math.sqrt(number);
console.log(squareRoot.toFixed(3)); // �����: "5.000"