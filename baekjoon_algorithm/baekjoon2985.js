// 세 수 _ 세 수 빈칸 사이에 계산이 성립되게 (+,-,*,/,=) 넣기
const readline = require("readline");
function solution(input) {
  let a = Number(input.split(" ")[0]);
  let b = Number(input.split(" ")[1]);
  let c = Number(input.split(" ")[2]);

  if (a + b == c) {
    console.log(`${a}` + "+" + `${b}` + "=" + `${a + b}`);
  } else if (a - b == c) {
    console.log(`${a}` + "-" + `${b}` + "=" + `${a - b}`);
  } else if (a * b == c) {
    console.log(`${a}` + "*" + `${b}` + "=" + `${a * b}`);
  } else if (a / b == c) {
    console.log(`${a}` + "/" + `${b}` + "=" + `${a / b}`);
  } else if (b + c == a) {
    console.log(`${b + c}` + "=" + `${b}` + "+" + `${c}`);
  } else if (b - c == a) {
    console.log(`${b - c}` + "=" + `${b}` + "-" + `${c}`);
  } else if (b * c == a) {
    console.log(`${b * c}` + "=" + `${b}` + "*" + `${c}`);
  } else {
    console.log(`${b / c}` + "=" + `${b}` + "/" + `${c}`);
  }
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  solution(line);
});
