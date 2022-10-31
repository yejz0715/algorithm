//연세대학교
const readline = require("readline");
function solution(input) {
  let answer = "";
  input === "0"
    ? (answer = "YONSEI")
    : (answer = "Leading the Way to the Future");
  return answer;
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  console.log(solution(line));
});
