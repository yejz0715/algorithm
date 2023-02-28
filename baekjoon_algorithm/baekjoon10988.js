//팰린드롬인지 확인하기
const readline = require("readline");
function solution(input) {
  let stringReverse = input.split("").reverse().join("");
  let answer = input === stringReverse ? 1 : 0;
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
