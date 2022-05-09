// 팀 나누기_두팀의 차이의 최솟값 구하기(두팀의 점수가 가능한 작은 차이를 갖도록=절댓값)
const readline = require("readline");
function solution(input) {
  let sort = input.split(" ").sort((a, b) => b - a);
  let max = 0;
  let min = 0;
  max = Number(sort[0]) + Number(sort[3]);
  min = Number(sort[1]) + Number(sort[2]);

  return Math.abs(max - min);
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  console.log(solution(line));
});
