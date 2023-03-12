//지능형기차2
/*
0 32
3 13
28 25
17 5
21 20
11 0
12 12
4 2
0 8
21 0
*/
const readline = require("readline");
function solution(input) {
  let arr = input.map((item) => item.split(" "));
  let answer = [];
  let before = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      answer.push(Number(arr[0][1]));
      before = arr[0][1];
    } else {
      before = before - Number(arr[i][0]) + Number(arr[i][1]);
      answer.push(before);
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
  if (arr.length === 10) {
    console.log(solution(arr));
    rl.close();
  }
});
