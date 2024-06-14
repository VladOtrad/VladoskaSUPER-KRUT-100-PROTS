// 1. ������� � ����� ����������� ���������
let a = 5; // ��������� �������� a ��� ��������

if (a > 3 && a < 10) {
    console.log('�����');
} else {
    console.log('�������');
}

// 2. ������� � || (���)
let a = 5; // ��������� �������� a ��� ��������

if (a === 0 || a === 2) {
    a += 7;
} else {
    a /= 10;
}
console.log("����� �������� a:", a);

// 3. Switch-case
let num = 3; // ��������� �������� num ��� ��������

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
    default:
        result = '������������ ��������';
}
console.log(result);

// 4. ������ ������
let day = 22; // ��������� �������� day ��� ��������

let decade;

if (day <= 10) {
    decade = '������';
} else if (day <= 20) {
    decade = '������';
} else {
    decade = '������';
}
console.log(`����� ${day} �������� � ${decade} ������`);

// 5. ���� ����
let month = 10; // ��������� �������� month ��� ��������

let season;

switch (month) {
    case 12:
    case 1:
    case 2:
        season = '����';
        break;
    case 3:
    case 4:
    case 5:
        season = '�����';
        break;
    case 6:
    case 7:
    case 8:
        season = '����';
        break;
    case 9:
    case 10:
    case 11:
        season = '�����';
        break;
    default:
        season = '������������ ��������';
}
console.log(`����� ${month} - ��� ${season}`);

// 6. �������� ������� ������� ������
let str = 'abcde'; // ��������� �������� str ��� ��������

if (str[0] === 'a') {
    console.log('��');
} else {
    console.log('���');
}