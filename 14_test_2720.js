// 세탁소 사장 동혁 거스름돈 계산
const readline = require("readline");
function solution(input) {
  const quater = 25;
  const dime = 10;
  const nick = 5;
  const penny = 1;

  //const i = input[i];
  for (i = 1; i <= input.length; i++) {
    const a = input[i] / quater;
    const b = a / dime;
    const c = b / nick;
    const d = c / penny;
    console.log(`${a} ${b} ${c} ${d}`);
  }
}
let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  arr.push(line);
  if (arr.length - 1 == arr[0]) solution(arr);
});
