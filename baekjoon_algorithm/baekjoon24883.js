const readline = require("readline");
function solution(input) {
  let answer = "";
  input === "N" || input === "n"
    ? (answer = "Naver D2")
    : (answer = "Naver Whale");
  return answer;
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  console.log(solution(line));
});
