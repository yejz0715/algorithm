// 니모를 찾아서 여러문장에서 NIMO찾기
const readline = require("readline");
function solution(input) {
  let line;
  for (i = 0; i < input.length - 1; i++) {
    line = input[i].toUpperCase();

    line.includes("NEMO") ? console.log("Found") : console.log("Missing");
  }
}
let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  arr.push(line);
  if (line === "EOI") {
    //EOI가 있다면 함수실행
    solution(arr);
  }
});
