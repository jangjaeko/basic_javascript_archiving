// function

// function greeting() {
//   // function declaration
//   console.log("Hello, World!");
// }

// greeting(); //함수 호출 function call

getArea(10, 20); //200 // argument(인자)
// 함수보다 위에 있어도 호출 가능
// javascript hoisting

function getArea(width, height) {
  // parameter(매개변수)
  const result = width * height;
  function inner() {
    console.log("inner function");
  }
  inner();
  console.log(result);
  return resulte; //함수 종료 및 값 반환
}

getArea(10, 20); //200 // argument(인자)

let area = getArea(5, 10); //50
// console.log(area); //50
