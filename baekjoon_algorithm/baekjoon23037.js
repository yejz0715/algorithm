//5의 수난
const readline = require("readline");
function solution(input) {
  let answer = input
    .split("")
    .map((item) => Number(item))
    .map((item) => Math.pow(item, 5))
    .reduce((a, b) => a + b);
  return answer;
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  console.log(solution(line));
});
