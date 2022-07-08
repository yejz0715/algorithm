//저작권
const readline = require("readline");

function solution(input) {
  let arr = input.split(" ").map((item) => Number(item));
  let answer = arr[0] * (arr[1] - 1) + 1;
  return answer;
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  console.log(solution(line));
});
