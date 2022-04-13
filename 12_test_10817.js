//세정수중 두번째로 큰 정수 출력
const readline = require("readline");
function solution(input) {
  numArr = input.split("");
  let answer = [];
  numArr.sort = answer;
  console.log(numArr);
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  solution(line);
});
