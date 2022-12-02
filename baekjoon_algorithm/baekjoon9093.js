//단어뒤집기
const readline = require("readline");
function solution(input) {
  let answer = input
    .map((item) =>
      item
        .split(" ")
        .map((item) => item.split("").reverse().join(""))
        .join(" ")
    )
    .join("\n");
  return answer;
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let arr = [];
rl.on("line", (line) => {
  arr.push(line);
  if (Number(arr[0]) + 1 === arr.length) {
    arr.shift();
    console.log(solution(arr));
  }
});
