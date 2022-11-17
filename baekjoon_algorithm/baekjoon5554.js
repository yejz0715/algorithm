//심부름 가는길
const readline = require("readline");
function solution(input) {
  let time = input.map((item) => Number(item)).reduce((a, b) => a + b);
  let minute = Math.floor(time / 60);
  let second = time % 60;
  let answer = minute + "\n" + second;

  return answer;
}
let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  arr.push(line);

  if (arr.length === 4) {
    console.log(solution(arr));
  }
});
