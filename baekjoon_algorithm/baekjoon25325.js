//학생 인기도 측정
const readline = require("readline");
function solution(input) {
  let nameArr = input[0].split(" ");
  let answer = "";
  sortArr = [];
  for (let j = 0; j < nameArr.length; j++) {
    let num = 0;
    let arr = [];
    for (let i = 1; i < input.length; i++) {
      arr = input[i].split(" ");
      for (let k = 0; k < arr.length; k++) {
        if (nameArr[j] === arr[k]) {
          num += 1;
        }
      }
    }
    answer += nameArr[j] + " " + num + "\n";
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
  if (Number(arr[0]) + 2 === arr.length) {
    arr.shift();
    console.log(solution(arr));
  }
});
