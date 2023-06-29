//알파벳개수
const readline = require("readline");

function solution(input) {
  const inputArr = input.split("");
  const countArr = new Array(26).fill(0);
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (let i of inputArr) {
    let index = alphabet.indexOf(i);
    if (index !== -1) {
      countArr[index]++;
    }
  }
  return countArr.join(" ");
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  console.log(solution(line));
  rl.close();
});
