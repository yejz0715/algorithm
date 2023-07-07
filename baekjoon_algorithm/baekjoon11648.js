//지속
const readline = require("readline");
function solution(input) {
  let number = input;
  let count = 0;

  while (number.length !== 1) {
    number = number
      .split("")
      .map((item) => Number(item))
      .reduce((a, b) => a * b)
      .toString();
    count++;
  }

  return count;
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  console.log(solution(line));
  rl.close();
});
