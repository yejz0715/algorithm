//지능형 기차
const readline = require("readline");
function solution(input) {
  let first = Number(input[0].split(" ")[1]);
  let second =
    Number(input[0].split(" ")[1]) +
    Number(input[1].split(" ")[1] - Number(input[1].split(" ")[0]));
  let third = Number(input[3].split(" ")[0]);
  return Math.max(first, second, third);
}
let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  arr.push(line);
  if (arr.length === 4) {
    console.log(solution(arr));
  }
});
