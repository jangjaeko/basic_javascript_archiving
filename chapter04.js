//변수

let age = 29; //선언 및 초기화
// let age; //선언
//console.log(age); //undefined

// console.log(age); //29
age = 30; //재할당

// console.log(age); //30
//let age=31; //재선언 불가

//상수

const birth = "1997 06 26";
//const birth; // 초기화 없이 선언 불가
//birth = '1997 06 27' //재할당 불가
console.log(birth); //1997 06 26

// 변수 명명 규칙, 네이밍 규칙
// 1 변수명에는 $ _ 제외한 기호는 사용할 수 없다.

let s_name;
let $name;

// 2 변수명은 숫자로 시작할 수 없다.
// let 1name;
let name1;
let _1name;

// 3 변수명은 예약어를 사용할 수 없다.
// let let;
// let if;
// let function;

//변수 명명 가이드 - 카멜케이스(camelCase), 스네이크케이스(snake_case), 파스칼케이스(PascalCase)
let salesCount;
let refundCount;
let totalCount = salesCount - refundCount;

let sales_count;
let refund_count;
let total_count = sales_count - refund_count;
