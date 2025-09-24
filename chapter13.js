// callback function

function main(value) {
  //   console.log(value); // => function sub() { ... }
  value();
}
// function sub() {
//   console.log("sub function");
// }
// main(sub);

// main(function sub() {
//   console.log("sub function");
// });

main(() => {
  //   console.log("sub function");
});

// 2. callback function 활용

//구조가 비슷한 경우 callbakk function 활용
// function repeat(count) {
//   for (let i = 0; i < count; i++) {
//     console.log(i);
//   }
// }
// function repeatDouble(count) {
//   for (let i = 0; i < count; i++) {
//     console.log(i * 2);
//   }
// }
// repeat(5);
// repeatDouble(5);

function repeat(count, callback) {
  for (let i = 0; i < count; i++) {
    callback(i);
  }
}
repeat(5, function (value) {
  console.log(value);
});
repeat(5, function (value) {
  console.log(value * 2);
});
repeat(5, (value) => console.log(value * 3));
