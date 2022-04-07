const readline = require("readline");
function solution(input) {
  for (i = 1; i <= input; i++) {
    console.log(BigInt(i));
  }
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  solution(line);
});
