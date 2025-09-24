// 1, null 병합 연산자
// 존재하는 값을 추려내는 기능
// null, undefined, NaN, 0, ''(빈문자열) => false

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; //양 쪽 값중 null 이아닌 값찾음 그래서 10이 저장됨
// console.log(var4); //10
let var5 = var1 ?? var3; //양 쪽 값중 null 혹은 undifined 이아닌 값찾음 그래서 20이 저장됨
let var6 = var2 ?? var3;
// console.log(var6); //10 둘다 null이 아니면 왼쪽 값(앞에값)

// 유저 이름과 유저 닉네임중 유저 이름이 우선 저장
let userName = null;
let userNickName = "jjang";

let name = userName ?? userNickName ?? "익명"; //모두 null 이거나 undifined 면 "익명" 저장
// console.log(name); //jjang

// 2. typeof 연산자
// 데이터 타입을 확인하는 연산자, 타입을 문자열로 반환함

let var7 = 123;
let var8 = "Hello";
let var9 = true;
// console.log(typeof var7); //number
// console.log(typeof var8);

// 3. 삼항 연산자
// 항을 3개 사용하는 연산자
// 조건식 ? 참일 때 실행할 코드 : 거짓일 때 실행할 코드

let var10 = 10;
// 요구사항 : 변수 res에 var10의 값이 짝수 => "짝수" , 홀수 => "홀수" 저장
let res = var10 % 2 === 0 ? "짝수" : "홀수"; // 왼쪽이 참일 떄 반환값, 오른쪽이 거짓일 때 반환값
// console.log(res); //짝수
// 중첩 삼항 연산자
let var11 = 15;
// 요구사항 : var11의 값이 0보다 크면 "양수", 0보다 작으면 "음수", 0이면 "0" 출력
let res2 = var11 > 0 ? "양수" : var11 < 0 ? "음수" : "0"; //중첩 삼항 연산자
// console.log(res2); //양수
