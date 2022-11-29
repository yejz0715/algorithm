//과목선택
const readline = require("readline");
function solution(input) {
  let arr = [];
  for (let i = 0; i < input.length - 2; i++) {
    arr.push(Number(input[i]));
  }
  arr = arr.sort((a, b) => b - a);

  let max = Math.max(Number(input[4]), Number(input[5]));
  return arr[0] + arr[1] + arr[2] + max;
}
let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  arr.push(line);
  if (6 === arr.length) {
    console.log(solution(arr));
  }
});
