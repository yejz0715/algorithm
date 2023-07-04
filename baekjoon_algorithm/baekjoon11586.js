//지영 공주님의 마법 거울

const readline = require("readline");
function solution(input) {
  let num = Number(input[input.length - 1]);
  input.pop();

  if (num === 1) {
    return input.join("\n");
  } else if (num === 2) {
    return input.map((item) => item.split("").reverse().join("")).join("\n");
  } else if (num === 3) {
    return input.reverse().join("\n");
  }
}
let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  arr.push(line);
  if (Number(arr[0]) === arr.length - 2) {
    arr.shift();
    console.log(solution(arr));
    rl.close();
  }
});
