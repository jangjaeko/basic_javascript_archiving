// object literal (객체)

let obj1 = new Object(); // object constructor 생성자
let obj2 = {}; //object literal (대부분 사용)

// object property
// key : value
// key : 문자열, 숫자, 특수문자(_,$)로 시작하는 문자
// value : 모든 자료형
let person = {
  name: "jaeho",
  age: 29,
  hobby: "sports",
  10: "ten",
  "my school": "Sejong University", // 띄어쓰기에는 따옴표 필요
};

// accessing property
// 1. dot notation
// console.log(person.name); //jaeho
let name = person.name; // jaeho
// 2. bracket notation (대괄호안에 key를 문자열로 작성)
// console.log(person["age"]); //29
// cosole.log(person[age]); //undefined
let age = person["age"]; //29

let property = "hobby";
// console.log(person[property]); //sports
// console.log(person.property); //undefined

// add new property
person.email = "jaeho@example.com";
person["phone number"] = "010-1234-5678";

//console.log(person.email); //jaeho@example.com
//console.log(person["phone number"]); //010-1234-5678

// update property
person.name = "jjang";
// console.log(person.name); //jjang
person["my school"] = "University";
// console.log(person["my school"]); //University

// delete property
delete person.age;
// console.log(person.age); //undefined
console.log(person);

// property existence check
// 1. in 연산자

let result = "name" in persion; // true
// console.log("ddd" in person); //false
