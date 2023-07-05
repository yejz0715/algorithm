//쿠키애호가
const readline = require("readline");
function solution(input) {
  let answer = input
    .map((item) => item.split(" "))
    .map((item) => Math.ceil(Number(item[0]) / Number(item[1])))
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
  if (Number(arr[0]) === arr.length - 1) {
    arr.shift();
    console.log(solution(arr));
  }
});
