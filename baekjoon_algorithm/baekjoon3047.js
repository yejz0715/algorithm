//ABC
const readline = require("readline");
function solution(input) {
  let answer = "";
  let num = input[0]
    .split(" ")
    .map((item) => Number(item))
    .sort((a, b) => a - b);
  let A = num[0];
  let B = num[1];
  let C = num[2];
  if (input[1] == "ABC") {
    answer += A + " " + B + " " + C;
  } else if (input[1] == "ACB") {
    answer = A + " " + C + " " + B;
  } else if (input[1] == "BAC") {
    answer = B + " " + A + " " + C;
  } else if (input[1] == "BCA") {
    answer = B + " " + C + " " + A;
  } else if (input[1] == "CAB") {
    answer = C + " " + A + " " + B;
  } else if (input[1] == "CBA") {
    answer = C + " " + B + " " + A;
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
    console.log(solution(arr));
  }
});
