//알파벳 찾기 아스키코드 사용
const readline = require("readline");
function solution(input) {
  let alphabet = Array(26).fill(-1); //배열 생성
  for (let i = 0; i < input.length; i++) {
    let index = input.charCodeAt(i) - 97; //input[i]의 아스키번호-97=알파벳 인덱스
    alphabet[index]++;
    if (alphabet[index] !== -1) {
      alphabet[index] = input.indexOf(input[i]);
    }
  }

  return alphabet.join(" ");
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  console.log(solution(line));
});
