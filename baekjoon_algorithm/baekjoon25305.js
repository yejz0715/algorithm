//커트라인
const readline = require("readline");
function solution(input) {
  let k = Number(input[0].split(" ")[1]);
  let score = input[1]
    .split(" ")
    .map((num) => Number(num))
    .sort((a, b) => b - a);
  return score[k - 1];
}
let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  arr.push(line);
  if (arr.length === 2) {
    console.log(solution(arr));
  }
});
