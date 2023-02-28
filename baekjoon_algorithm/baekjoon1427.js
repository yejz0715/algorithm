//소트인사이드
const readline = require("readline");
function solution(input) {
  let answer = input
    .split("")
    .map((item) => Number(item))
    .sort((a, b) => b - a)
    .join("");
  return answer;
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  console.log(solution(line));

  rl.close();
});
