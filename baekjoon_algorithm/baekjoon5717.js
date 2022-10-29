//상근이의 친구들
const readline = require("readline");
const solution = (input) => {
  let answer = input
    .map((item) =>
      item
        .split(" ")
        .map((item) => Number(item))
        .reduce((a, b) => a + b)
    )
    .join("\n");
  return answer;
};
let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  arr.push(line);
  if (line === "0 0") {
    arr.pop();
    console.log(solution(arr));
  }
});
