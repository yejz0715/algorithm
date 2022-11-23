//개표
const readline = require("readline");
function solution(input) {
  let numA = 0;
  let numB = 0;
  let answer = "";
  let numArr = input[0].split("").sort();
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] === "A") {
      numA += 1;
    } else {
      numB += 1;
    }
  }

  if (numA > numB) {
    answer = "A";
  } else if (numA < numB) {
    answer = "B";
  } else {
    answer = "Tie";
  }
  return answer;
}
let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  arr.push(line);
  if (arr.length === 2) {
    arr.shift();
    console.log(solution(arr));
  }
});
