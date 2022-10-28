//숫자놀이
const readline = require("readline");
function solution(input) {
  let answer = "";
  let numArr = [];
  let num = 0;
  input
    .map((item) =>
      item
        .split("")
        .map((num) => Number(num))
        .reduce((a, b) => a + b)
        .toString()
    )
    .filter(function (item) {
      if (item.length >= 2) {
        numArr.push(
          item
            .split("")
            .map((num) => Number(num))
            .reduce((a, b) => a + b)
        );
      } else {
        numArr.push(item);
      }
    });

  for (let i = 0; i < numArr.length; i++) {
    for (let j = 0; j < numArr[i].length; j++) {
      if (num[i][j] >= 2) {
        num += Number(num[i][j]);
        answer += num + "\n";
      } else {
        answer += num[i][j] + "\n";
      }
    }
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

  if (line === "0") {
    arr.pop();
    console.log(solution(arr));
  }
});
