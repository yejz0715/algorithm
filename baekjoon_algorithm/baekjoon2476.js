//주사위 게임
const readline = require("readline");
function solution(input) {
  let answer = [];
  let arr = input.map((item) => item.split(" "));
  for (let i = 0; i < arr.length; i++) {
    let numA = Number(arr[i][0]);
    let numB = Number(arr[i][1]);
    let numC = Number(arr[i][2]);

    if (numA === numB && numA === numC) {
      answer.push(10000 + numA * 1000);
    } else if (numA === numB || numB !== numC) {
      answer.push(1000 + numB * 100);
    } else if (numA === numC) {
      answer.push(1000 + numA * 100);
    } else {
      answer.push(Math.max(numA, numB, numC) * 100);
    }
  }
  answer = answer.sort((a, b) => b - a);
  return answer[0];
}
let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  arr.push(line);
  if (arr.length - 1 === Number(arr[0])) {
    arr.shift();
    console.log(solution(arr));
    rl.close();
  }
});
