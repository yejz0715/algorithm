//단어 길이 재개
const readline = require("readline");
function solution(input) {
  let arr = input.split("").map((item) => Number(item));
  return arr.length;
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  console.log(solution(line));
});
