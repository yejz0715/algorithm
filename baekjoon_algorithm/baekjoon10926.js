// ??!

const readline = require("readline");
function solution(input) {
  let answer = input + "??!";
  return answer;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  console.log(solution(line));
});
