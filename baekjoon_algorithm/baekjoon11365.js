//!밀비 급일
const readline = require("readline");
function solution(input) {
  let answer = input
    .map((item) => item.split("").reverse().join(""))
    .join("\n");
  return answer;
}
let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  arr.push(line);

  if (line === "END") {
    arr.pop();
    console.log(solution(arr));
  }
});
