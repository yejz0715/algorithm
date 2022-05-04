//시험성적-if문으로 점수입력하면 A~F로 표시
//조건: 시험 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.
const readline = require("readline");
function solution(input) {
  let a = Number(input);

  if (90 <= a && a <= 100) {
    console.log("A");
  } else if (80 <= a && a <= 89) {
    console.log("B");
  } else if (70 <= a && a <= 79) {
    console.log("C");
  } else if (60 <= a && a <= 69) {
    console.log("D");
  } else console.log("F");
}

//삼항연산자
// a >= 90 && a <= 100
//   ? console.log("A")
//   : a >= 80 && a <= 89
//   ? console.log("B")
//   : console.log("F");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  solution(line);
});
