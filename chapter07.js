// 대입 연산자 =, +=, -=, *=, /=, %=
let a = 10;
a += 5; // a = a + 5
// console.log(a); // 15

// 산술 연산자 +, -, *, /, %
let b = 20;
let c = 3;

// console.log(b + c); // 23
// console.log(b - c); // 17
// console.log(b * c); // 60
// console.log(b / c); // 6.666666666666667
// console.log(b % c); // 2

// 복합 대입 연산자 +=, -=, *=, /=, %=

let d = 10;
d += 5; // a = a + 5
// console.log(a); // 15

// 증감 연산자 ++, --
let e = 10;
// console.log(e++); // 10
//// 후위 연산
//console.log(++e); // 11
////전위연산
//e++; 증감 후에 다음 줄에 출력해야 11
// console.log(e); // 11

// 논리 연산자 &&(AND), ||(OR), !(NOT)
let or = true || false; // 둘 중 하나만 true여도 true
let and = true && false; // 둘 다 true여야 true
let not = !true; // false

// 비교 연산자 >, <, >=, <=, ==, ===, !=, !==
let comp1 = 1 === 2; // false
let comp2 = 1 !== 2; // true

let comp3 = 1 > 2; // false
let comp4 = 1 < 2; //true
let comp5 = 1 >= 1; //true
let comp6 = 1 <= 2; //true

// == 값만 비교, === 값과 타입 모두 비교
let comp7 = 1 == "1"; //true
let comp8 = 1 === "1"; //false
