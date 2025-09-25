// array

let arrA = new Array(); //생성자 함수
let arrB = []; //리터럴 표기법

let arrC = [10, 20, 30];
// 타입이 상관없음
let arrD = ["hello", 100, true, null, undefined, () => {}, {}, []];

// 인덱스 접근
let item1 = arrC[0]; //10
// console.log(item1); //10

arrC[1] = 200; //20 -> 200 변경
// console.log(arrC); //[ 10, 200, 30 ]
