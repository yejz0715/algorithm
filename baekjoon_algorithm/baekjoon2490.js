//윷놀이
/*
0 1 0 1
1 1 1 0
0 0 1 1
*/
const readline = require("readline");
function solution(input) {
  let num = "";
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] === "1") {
        num += "a";
      }
    }
    if (num.length === 0) {
      console.log("D");
    } else if (num.length === 1) {
      console.log("C");
    } else if (num.length === 2) {
      console.log("B");
    } else if (num.length === 3) {
      console.log("A");
    } else console.log("E");
    num = "";
  }
}
let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  arr.push(line);
  if (arr.length === 3) {
    return solution(arr);
  }
});
