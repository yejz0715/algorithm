//곱셈
const readline = require("readline");
function solution(input) {
  let num = input[1].split("").map((item) => Number(item));
  console.log(input[0] * num[2]);
  console.log(input[0] * num[1]);
  console.log(input[0] * num[0]);
  console.log(input[0] * input[1]);
}
let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  arr.push(line);
  if (arr.length === 2) {
    return solution(arr);
  }
});
