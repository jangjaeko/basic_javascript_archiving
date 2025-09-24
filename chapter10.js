// for statement
// for ( counter; condition; increment ) { ... }
// for (초기식, 조건식, 증감식) { ... }

for (let idx = 0; idx < 5; idx++) {
  if (idx % 2 === 0) {
    continue; //다음 반복으로 넘어감
  }
  if (idx === 4) {
    break; //반복문 탈출
    // continue; //다음 반복으로 넘어감
  }
  console.log(idx); //0 1 2 3 4
}
