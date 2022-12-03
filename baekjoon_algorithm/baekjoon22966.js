//가장 쉬운 문제를 찾는 문제
const readline = require("readline");
function solution(input) {
  let answer = "";
  for (let i = 0; i < input.length; i++) {
    let arr = input[i].split(" ");
    let num = Math.min(Number(arr[1]));
    answer = num;
  }
  return num;
}
let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  arr.push(line);
  if (Number(arr[0]) === arr.length - 1) {
    arr.shift();
    console.log(solution(arr));
  }
});
