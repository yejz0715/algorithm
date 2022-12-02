//단어순서 뒤집기
const readline = require("readline");
function solution(input) {
  let answer = "";
  let string = "";
  let num = 0;
  for (let i = 0; i < input.length; i++) {
    string = input[i].split(" ").reverse().join(" ");
    num = i + 1;
    answer += "Case #" + num + ": " + string + "\n";
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

  if (Number(arr[0]) + 1 === arr.length) {
    arr.shift();
    console.log(solution(arr));
  }
});
