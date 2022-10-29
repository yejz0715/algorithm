//R2
const readline = require("readline");
function solution(input) {
  let numA = Number(input.split(" ")[0]);
  let sum = Number(input.split(" ")[1]);
  let answer = sum * 2 - numA;
  return answer;
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  console.log(solution(line));
});
