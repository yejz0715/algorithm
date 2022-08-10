const readline = require("readline");
function solution(input) {
  let num = 1;
  let sum = 0;
  while (num <= input) {
    sum += num;
    num++;
  }
  console.log(sum);
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  return solution(line);
});
