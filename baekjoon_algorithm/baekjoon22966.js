//
const readline = require("readline");
function solution(input) {
  for (let i = 0; i < input.length; i++) {
    let arr = input[i].split(" ");
    let a = Math.min(Number(arr[1]));
    console.log(arr[a]);
    console.log(a);
  }
  return arr;
}
let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  arr.push(line);
  if (Number(arr[0]) === arr.length - 1) {
    arr.shift();
    console.log(solution(arr));
  }
});
