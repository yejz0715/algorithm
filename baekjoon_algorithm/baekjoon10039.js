// 평균점수
const readline = require("readline");
function solution(input) {
  // let answer = 0;
  let score =
    input
      .map((item) => (item > 40 ? Number(item) : 40))
      .reduce((a, b) => a + b) / 5;
  // for (let i = 0; i < score.length; i++) {
  //   answer += score[i];
  // }
  //return answer/5;
  return score;
}
let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  arr.push(line);
  if (arr.length === 5) {
    console.log(solution(arr));
  }
});
