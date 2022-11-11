//짝수를 찾아라
const readline = require("readline");
function solution(input) {
  let answer = "";
  let numArr = input.map((item) =>
    item
      .split(" ")
      .map((item) => Number(item))
      .sort((a, b) => a - b)
      .filter((item) => item % 2 === 0)
  );
  numArr.map((item) => {
    let sum = item.reduce((a, b) => a + b);
    let minimum = item[0];
    answer += sum + " " + minimum + "\n";
  });
  return answer;
}

let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  arr.push(line);

  if (Number(arr[0]) + 1 === arr.length) {
    arr.shift();
    console.log(solution(arr));
  }
});
