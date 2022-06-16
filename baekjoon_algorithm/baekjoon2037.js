//문자메시지
const readline = require("readline");
function solution(input) {
  let p = Number(input[0].split(" ")[0]); //한번 누를때 걸리는 시간
  let w = Number(input[0].split(" ")[1]); //같은 자판인 문자를 연속해서 찍기 위해 기다리는 시간
  let message = input[1].split("");
  let answer = 0;

  //객체접근 phone[2] (숫자라 배열처럼 접근)
  const phone = {
    1: [" "],
    2: ["A", "B", "C"],
    3: ["D", "E", "F"],
    4: ["G", "H", "I"],
    5: ["J", "K", "L"],
    6: ["M", "N", "O"],
    7: ["P", "Q", "R", "S"],
    8: ["T", "U", "V"],
    9: ["W", "X", "Y", "Z"],
  };
  for (let i = 0; i < message.length; i++) {
    //객체는 size/  indexof

    for (let j = 1; j <= 9; j++) {
      if (phone[j].indexOf(message[i] !== -1)) {
        //phone[j]에 message[i]이 없다면(=-1)
        console.log(
          `${message[i]} 는 ${j}줄에 ${phone[j].indexOf(message[i])}`
        );
        break;
      }
    }
  }
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
