//1번부터 문제의 상태가…?
const readline = require("readline");
function solution(input) {
  let string = input.split("");
  let answer = "";

  if (string.includes("A")) {
    answer = input.replace(/[BCDF]/g, "A");
  } else {
    if (string.includes("B")) {
      answer = input.replace(/[CDF]/g, "B");
    } else {
      if (string.includes("C")) {
        answer = input.replace(/[DF]/g, "C");
      } else {
        answer = input.replace(/[A-Z]/g, "A");
      }
    }
  }
  return answer;
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  console.log(solution(line));
});
