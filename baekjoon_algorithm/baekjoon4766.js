//일반화학실험
/*
10.0
12.05
30.25
20
999
*/

const readline = require("readline");
function solution(input) {
  let number = 0;
  let answer = "";
  for (let i = 0; i < input.length - 1; i++) {
    number = Number(input[i + 1]) - Number(input[i]);
    number = number.toFixed(2);
    answer += number + "\n";
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
  if (arr[arr.length - 1] === "999") {
    arr.pop();
    console.log(solution(arr));
    rl.close();
  }
});
