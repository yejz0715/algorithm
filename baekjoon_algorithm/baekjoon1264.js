// 모음의 개수
const readline = require("readline");
function solution(input) {
  let message = input;
  for (let i = 0; i < message.length; i++) {}
}
let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  arr.push(line);
  if (line === "#") {
    //한줄에 "#" 있다면 함수실행
    console.log(solution(arr));
  }
});
