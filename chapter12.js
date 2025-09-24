// 함수 표햔식
function funcA() {
  //   console.log("funcA");
}

let varA = funcA;
// console.log(varA);
// result
// ƒ funcA() {
//   console.log("funcA");
// }
// 함수 자체가 할당됨
varA(); //funcA

let varB = function () {
  //   console.log("varB");
}; //익명 함수 hoisting 불가능
varB(); //varB

// arrow function
let varC = () => {
  console.log("varC");
};
varC(); //varC
let varD = (value) => value + 1; //return 생략 가

// console.log(varD(10)); //11
