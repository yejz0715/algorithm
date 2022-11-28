//
const readline = require("readline");
function solution(input) {
  let answer = input.map((item) => Number(item)).reduce((a, b) => a + b);
  return answer;
}
let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  arr.push(line);
  if (line === "-1") {
    arr.pop();
    console.log(solution(arr));
  }
});
