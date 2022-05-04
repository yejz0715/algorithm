//세정수중 두번째로 큰 정수 출력
const readline = require("readline");
function solution(input) {
  let numArr = input.split(" ");
  numArr.sort((a, b) => a - b);
  //console.log(numArr);
  const answer = numArr[1];
  return answer;
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(line));
});
