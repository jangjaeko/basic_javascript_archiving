// scope
// 전역 스코프 : 어디서든 접근 가능
// 지역 스코프 : 특정 영역에서만 접근 가능
// 함수 스코프 : 함수 내에서만 접근 가능
// 블록 스코프 : 블록({}) 내에서만 접근 가능 (중괄호 안쪽 영역)

let a = 1; //  global scope

function funcA() {
  // function scope
  let b = 2; // local scope
  console.log(a); // 1
  console.log(b); // 2
}
funcA();
// console.log(b); // error

if (true) {
  // block scope
  let c = 3; // local scope
  console.log(a); // 1
  console.log(c); // 3
}
for (let i = 0; i < 3; i++) {
  // i = local scope
  // block scope
  console.log(i); // 0 1 2
}
