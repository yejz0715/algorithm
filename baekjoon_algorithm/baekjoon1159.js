//농구경기
const readline = require("readline");
function solution(input) {
  let firstName = [];
  for (let i = 1; i < input.length; i++) {
    firstName.push(input[i].split("")[0]);
  }
  let arr = firstName.reduce((accu, curr) => {
    accu[curr] = (accu[curr] || 0) + 1;
    return accu;
  }, {});

  return arr;
}
let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  arr.push(line);
  if (arr.length - 1 === Number(arr[0])) {
    console.log(solution(arr));
  }
});
