//문자열 반복
/*
2
3 ABC
5 /HTP
*/

const readline = require("readline");
function solution(input) {
  let answer = "";
  for (let i = 0; i < input.length; i++) {
    let num = input[i].split(" ")[0];
    let word = input[i].split(" ")[1];
    for (let j = 0; j < word.length; j++) {
      answer += word[j].repeat(num);
    }
    answer += "\n";
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
  if (Number(arr[0]) === arr.length - 1) {
    arr.shift();
    console.log(solution(arr));
  }
});
