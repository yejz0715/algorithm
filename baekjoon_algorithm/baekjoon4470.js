//줄번호
const readline = require("readline");
function solution(input) {
  let answer = "";
  for (let i = 0; i < input.length; i++) {
    answer += i + 1 + ". " + input[i] + "\n";
  }
  return answer;
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let arr = [];
rl.on("line", (line) => {
  arr.push(line);
  if (arr.length === Number(arr[0]) + 1) {
    arr.shift();
    console.log(solution(arr));
  }
});
