// 더하기3
const readline = require("readline");
const solution = (input) => {
  let answer = input
    .split(" ")
    .map((item) => Number(item))
    .reduce((a, b) => a + b);
  return answer;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(line));
});
