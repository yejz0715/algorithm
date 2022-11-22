const readline = require("readline");
function solution(input) {
  let num = 0;
  for (let i = 0; i <= input; i++) {
    num += i;
  }
  return num;
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  console.log(solution(line));
});
