//시험점수
const readline = require("readline");
function solution(input) {
  let answer = input
    .map((item) =>
      item
        .split(" ")
        .map((item) => Number(item))
        .reduce((a, b) => a + b)
    )
    .sort((a, b) => b - a)[0];
  return answer;
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
