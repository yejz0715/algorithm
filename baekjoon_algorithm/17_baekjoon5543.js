// 상근날드 Math.min
const readline = require("readline");
function solution(input) {
  let burger = [input[0], input[1], input[2]];
  let drink = [input[3], input[4]];
  console.log(Math.min(...burger) + Math.min(...drink) - 50);
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let arr = [];
rl.on("line", (line) => {
  arr.push(line);
  if (arr.length == 5) {
    solution(arr);
  }
});
