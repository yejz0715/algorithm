//치킨댄스를 추는 곰곰이를 본 임스 2
const readline = require("readline");
function solution(input) {
  let num = input
    .map((item) => item.split("-")[1])
    .map((item) => Number(item))
    .filter((item) => item <= 90);
  return num.length;
}
let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  arr.push(line);
  if (arr.length - 1 === Number(arr[0])) {
    arr.shift();
    console.log(solution(arr));
  }
});
