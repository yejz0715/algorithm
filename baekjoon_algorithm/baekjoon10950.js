const readline = require("readline");
function solution(input) {
  let answer = input
    .map((item) =>
      item
        .split(" ")
        .map((item) => Number(item))
        .reduce((a, b) => a + b)
    )
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
  if (Number(arr[0]) + 1 === arr.length) {
    arr.shift();
    console.log(solution(arr));
  }
});
