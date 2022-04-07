const readline = require("readline");
function solution(n) {
  for (i = 1; 1 <= i <= 9; i++) {
    console.log(`n * i = ${n * i}`);
  }
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  solution(line);
});
