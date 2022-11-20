//패리티
const readline = require("readline");
function solution(input) {
  let answer = "";
  for (let i = 0; i < input.length; i++) {
    let stringBox = "";
    let num = 0;
    for (let j = 0; j < input[i].length; j++) {
      stringBox += input[i][j];
      if (input[i][j] === "1") {
        num += 1;
      }
      if (num % 2 === 0) {
        if (input[i][j] === "e") {
          stringBox = stringBox.replace("e", "0");
        } else {
          stringBox = stringBox.replace("o", "1");
        }
      } else {
        if (input[i][j] === "e") {
          stringBox = stringBox.replace("e", "1");
        } else {
          stringBox = stringBox.replace("o", "0");
        }
      }
    }
    answer += stringBox + "\n";
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

  if (line === "#") {
    arr.pop();
    console.log(solution(arr));
  }
});
