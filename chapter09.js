// if else if else statement

let num = 10;
if (num > 0) {
  // console.log("양수입니다.");
} else if (num < 0) {
  // console.log("음수입니다.");
} else {
  // console.log("0입니다.");
}

// switch statement
// => if 문과 기능 자체는 동일
// => 다수의 조건을 처리할 때 if 문보다 가독성이 좋음

let animal = "cat";
switch (
  animal // 괄호 안에 변수
) {
  case "dog": {
    // console.log("멍멍");
    break;
  }
  case "cat": {
    // console.log("야옹");
    break;
  }
  case "pig": {
    // console.log("꿀꿀");
    break;
  }
  default: {
    // else roll
    // console.log("모르겠어요");
  }
}
