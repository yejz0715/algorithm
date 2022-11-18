//10부제
const readline = require("readline");
function solution(input) {
  let num = Number(input[0]);
  let numArr = input[1]
    .split(" ")
    .map((item) => Number(item))
    .filter((item) => num === item);
  return numArr.length;
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
