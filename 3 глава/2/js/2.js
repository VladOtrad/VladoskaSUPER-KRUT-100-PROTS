console.log("1:");
let a = 4;
if (a > 3 && a < 10) {
    console.log('�����')
} else {
    console.log('�������')
};

console.log("2:");
if (a == 0 || a == 2) {
    a += 7
} else {
    a /= 10
};
console.log(a);

console.log("3:");
let num = 2;
let result;
switch (num) {
    case 1:
        result = '����';
        break;
    case 2:
        result = '�����';
        break;
    case 3:
        result = '����';
        break;
    case 4:
        result = '�����';
        break;
    default: console.log("����� ��� ���������");
        break;
}
console.log(result);

console.log("4:");
let day = 28;
switch (day) {
    case 1: case 2: case 3: case 4: case 5:
    case 6: case 7: case 8: case 9: case 10:
        console.log("������ ������");
        break;
    case 11: case 12: case 13: case 14: case 15:
    case 16: case 17: case 18: case 19: case 20:
        console.log("������ ������");
        break;
    case 21: case 22: case 23: case 24: case 25:
    case 26: case 27: case 28: case 29: case 30: case 31:
        console.log("������ ������");
        break;
    default: console.log("����� ��� ���������");
        break;
}

console.log("5:");
let month = 5;
switch (month) {
    case 12: case 1: case 2:
        console.log("����");
        break;
    case 3: case 4: case 5:
        console.log("�����");
        break;
    case 6: case 7: case 8:
        console.log("����");
        break;
    case 9: case 10: case 11:
        console.log("�����");
        break;
    default: console.log("����� ��� ���������");
        break;
}

console.log("6:");
let str = 'fgxlz';
if (str[0] == 'a') {
    console.log("��")
} else {
    console.log("���")
};