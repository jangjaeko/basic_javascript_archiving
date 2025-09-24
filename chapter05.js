// 1. number Type

let num1 = 10; //정수
let num2 = 10.12; //실수
let num3 = -20;

// console.log(num1 - num2); //-0.1200000000000001
// console.log(num1 * num2); //101.2
// console.log(num1 / num2);
// console.log(num1 % 3); //1

let inf = Infinity;
let ninf = -Infinity;

let nan = NaN; //Not a Number (수치연산 실패시 보통 나옴)
//console.log("aaa" / 3); //NaN

// 2. string Type

let str1 = "Hello";
let str2 = "World";
let str6 = str1 + str2;
console.log(str1 + str2); //HelloWorld
console.log(str6); //HelloWorld

let str3 = `${str1}안녕 ${str2} 세상아`; //템플릿 리터럴(백틱``)

// 3. boolean Type

let bool1 = true;
let bool2 = false;

// 4. null Type

let n = null; //값이 없음을 명시적으로 표현할 때 사용

// 5. undefined Type

let u; //선언은 되었지만 값이 할당되지 않은 상태
//console.log(u); //undefined
