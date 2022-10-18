// 홀수
const readline = require("readline");
function solution(input) {
  let answer = "";
  let numArr = input
    .map((item) => Number(item))
    .filter((item) => item % 2 != 0)
    .sort((a, b) => a - b);
  if (numArr.length === 0) {
    answer += "-1";
  } else {
    let sum = numArr.reduce((a, b) => a + b);
    answer += sum + "\n" + numArr[0];
  }
  return answer;
}
let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  arr.push(line);
  if (arr.length === 7) {
    console.log(solution(arr));
  }
});
