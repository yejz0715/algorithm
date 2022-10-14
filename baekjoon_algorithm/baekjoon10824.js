//네 수
const readline = require("readline");
const solution = (input) => {
  let numArr = input.split(" ");
  let answer = Number(numArr[0] + numArr[1]) + Number(numArr[2] + numArr[3]);
  return answer;
};
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(line));
});
