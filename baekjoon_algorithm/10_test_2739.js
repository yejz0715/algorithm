//구구단
const readline = require("readline");
function solution(n) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
  }
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  solution(line);
});
