//열개씩 끊어 출력하기
const readline = require("readline");
function solution(input) {
  let answer = "";
  for (let i = 0; i < input.length; i++) {
    answer += input[i];
    if (answer.length === 10) {
      console.log(answer);
      answer = "";
    }
  }
  console.log(answer);
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  return solution(line);
});
