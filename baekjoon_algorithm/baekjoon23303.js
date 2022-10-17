//이 문제는 D2 입니다.

const readline = require("readline");
function solution(input) {
  let answer = "";
  let regex = /D2/gi;
  regex.test(input) ? (answer = "D2") : (answer = "unrated");

  return answer;
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  console.log(solution(line));
});
