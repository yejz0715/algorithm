//숫자의 합
const readline = require("readline");
function solution(input) {
  let answer = input
    .toString()
    .split("")
    .map((item) => Number(item))
    .reduce((a, b) => a + b);
  return answer;
}

let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  arr.push(line);

  if (arr.length === 2) {
    arr.shift();
    console.log(solution(arr));
  }
});
