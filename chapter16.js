// 상수 객체

const animal = {
  type: "cat",
  name: "coco",
  color: "white",
};
//const로 선언된 객체는 재할당 불가하지만, 객체 내부 프로퍼티는 변경 가능
animal.age = 3;
animal.name = "happy";
delete animal.color; //프로퍼티 삭제
// animal = {}; //재할당 불가
// animal = 123

console.log(animal); //{ type: 'cat', name: 'happy', age: 3 }

// method 매서드
// => 값이 함수인 프로퍼티
const person = {
  name: "jang",
  sayHi: function () {
    console.log(`Hi! My name is ${this.name}`); //this : 객체 자기 자신을 가리킴
  },
  sayBye() {
    console.log("Bye!");
  },
};

console.log(person.name); //jang
console.log(person.sayBye()); //undifined +  Bye!
person["sayHi"](); //Hi! My name is jang
// person.sayHi(); //Hi! My name is jang
person.sayBye(); //Bye!
