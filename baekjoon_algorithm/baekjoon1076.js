//저항
const readline = require("readline");
function solution(input) {
  let colorArr = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white",
  ];
  let answer = 0;
  let tmp = 10 * colorArr.indexOf(input[0]) + colorArr.indexOf(input[1]);
  let third = 10 ** colorArr.indexOf(input[2]);

  answer = tmp * third;

  return answer;
}

let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  arr.push(line);
  if (arr.length === 3) {
    console.log(solution(arr));
    rl.close();
  }
});
