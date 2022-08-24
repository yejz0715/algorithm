//팩토리얼
const readline = require("readline");
function solution(input) {
  let num = Number(input);
  let answer = 1;
  for (let i = num; i >= 1; i--) {
    answer *= i;
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
