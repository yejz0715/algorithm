//시험점수
const readline = require("readline");
function solution(input) {
  let answer = "";
  input === "0"
    ? (answer = "YONSEI")
    : (answer = "Leading the Way to the Future");
  return answer;
}
let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  console.log(solution(line));
});
