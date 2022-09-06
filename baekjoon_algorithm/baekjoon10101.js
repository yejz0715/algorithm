//삼각형 외우기
const readline = require("readline");
function solution(input) {
  let answer = "";
  let one = Number(input[0]);
  let two = Number(input[1]);
  let three = Number(input[2]);
  if (one === 60 && two === 60 && three === 60) {
    answer = "Equilateral";
  } else if (
    one + two + three === 180 &&
    (one === two || one === three || two === three)
  ) {
    answer = "Isosceles";
  } else if (
    one + two + three === 180 &&
    (one !== two || one !== three || two !== three)
  ) {
    answer = "Scalene";
  } else {
    answer = "Error";
  }
  return answer;
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let arr = [];
rl.on("line", (line) => {
  arr.push(line);
  if (arr.length === 3) {
    console.log(solution(arr));
  }
});
