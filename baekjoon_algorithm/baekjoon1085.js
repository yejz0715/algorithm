// 직사각형에 탈출
const readline = require("readline");
function solution(input) {
  let arr = input.split(" ").map((num) => Number(num));

  return Math.min(arr[0], arr[1], arr[2] - arr[0], arr[3] - arr[1]);
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  console.log(solution(line));
});
