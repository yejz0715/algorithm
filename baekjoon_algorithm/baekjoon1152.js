//단어의 개수
const readline = require("readline");
function solution(input) {
  let answer = input.split(" ").filter((item) => item.length > 0);
  return answer.length;
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  console.log(solution(line));
});
