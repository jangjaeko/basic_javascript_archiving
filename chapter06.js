// 묵시적 형 변환
// 자바스크립트의 엔진이 알아서 형 변환을 해주는 것

let num = 10;
let str = "20";
let result = num + str; // num이 string으로 형 변환
// console.log(result); //1020

// 명시적 형 변환
// 개발자가 직접 형 변환을 해주는 것

let num2 = 10;
let str2 = "20";
let result2 = num2 + Number(str2); // str2가 number로 형 변환
// console.log(result2); //30

let result3 = num2.toString() + str2; // num2가 string으로 형 변환
let result4 = String(num2) + str2; // num2가 string으로 형 변환
// console.log(result3); //1020
// console.log(result4); //1020
let strtoNum = Number("20개"); //문자열을 실수로 변환
// console.log(strtoNum); //NaN

//문자 -> 숫자
// parseInt(), parseFloat()
let strtoNum2 = parseInt("20개"); //문자열을 정수로 변환
let strtoNum3 = parseFloat("10.12입니다."); //문자열을 실수로 변환
// console.log(strtoNum2); //20
// console.log(strtoNum3); //10.12

//숫자 -> 문자
let numtoStr = String(123);
let numtoStr2 = (123).toString();
// console.log(numtoStr); //123
// console.log(numtoStr2); //123
