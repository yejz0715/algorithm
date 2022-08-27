// 사칙연산

const readline = require("readline");
function solution(input) {
  let a = Number(input.split(" ")[0]);
  let b = Number(input.split(" ")[1]);
  console.log(a + b);
  console.log(a - b);
  console.log(a * b);
  console.log(Math.floor(a / b));
  console.log(a % b);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  return solution(line);
});
