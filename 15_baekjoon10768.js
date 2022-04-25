// 특별한 날
const readline = require("readline");
function solution(input) {
  let month = input[0];
  let day = input[1];
  if (month == 2 && day == 18) {
    console.log("Special");
  } else if ((month == 1 && day <= 31) || (month == 2 && day <= 18)) {
    console.log("Before");
  } else {
    console.log("After");
  }
}

let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  arr.push(line);
  if (arr.length === 2) solution(arr);
});
