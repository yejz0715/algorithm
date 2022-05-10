//최소, 최대
const readline = require("readline");
function solution(input) {
  let numArr = input[1].split(" ").sort((a, b) => a - b);
  let max;
  let min;
  let a = numArr.length - 1;
  max = Number(numArr[a]);
  min = Number(numArr[0]);

  return min + " " + max;
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
