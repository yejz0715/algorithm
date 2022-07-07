//기찍 N
const readline = require("readline");

function solution(input) {
  let answer = input + "\n";
  for (let i = input; i > 1; i--) {
    answer += i - 1 + "\n";
  }
  return input, answer;
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  console.log(solution(line));
});
