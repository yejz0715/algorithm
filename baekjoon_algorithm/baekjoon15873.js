//공백 없는 A+B
const readline = require("readline");
function solution(input) {
  let arr = input.split("");
  let answer = 0;
  if (arr.length === 2) {
    answer = Number(arr[0]) + Number(arr[1]);
  } else if (arr.length === 3) {
    if (arr[1] === "0") {
      answer = Number(arr[0] + arr[1]) + Number(arr[2]);
    } else if (arr[2] === "0") {
      answer = Number(arr[0]) + Number(arr[1] + arr[2]);
    }
  } else if (arr.length === 4) {
    answer = Number(arr[0] + arr[1]) + Number(arr[2] + arr[3]);
  }

  return answer;
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  console.log(solution(line));
});
