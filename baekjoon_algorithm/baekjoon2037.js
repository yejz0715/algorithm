//문자메시지
const readline = require("readline");
function solution(input) {
  let p = Number(input[0].split(" ")[0]); //한번 누를때 걸리는 시간
  let w = Number(input[0].split(" ")[1]); //같은 자판인 문자를 연속해서 찍기 위해 기다리는 시간
  let message = input[1].split("");
  let one = [];
  let two = [];
  let three = [];
  let four = [];
  one.push(" ", "A", "D", "G", "J", "M", "P", "T", "W");
  two.push("B", "E", "H", "K", "N", "Q", "U", "X");
  three.push("C", "F", "I", "L", "O", "R", "V", "Y");
  four.push("S", "Z");

  let answer = 0;

  for (let i = 0; i < message.length; i++) {
    for (let j = 0; j < one.length; j++) {
      if (message[i] === one[j]) {
        answer += p;
      }
    }
    for (let j = 0; j < two.length; j++) {
      if (message[i] === two[j]) {
        answer += 2 * p;
      }
    }
    for (let j = 0; j < three.length; j++) {
      if (message[i] === three[j]) {
        answer += 3 * p;
      }
    }
    for (let j = 0; j < four.length; j++) {
      if (message[i] === four[j]) {
        answer += 4 * p;
      }
    }
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
  if (arr.length === 2) {
    console.log(solution(arr));
  }
});
