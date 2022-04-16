// 세탁소 사장 동혁 거스름돈 계산
const readline = require("readline");
function solution(input) {
  console.log(input);
}
let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  arr.push(line);
  if (arr.length== arr[0]) solution(arr);
});
