const readline = require("readline");

//긴자리 계산 //첫째줄에 n, 둘째줄에 m 입력
function solution(input) {
  let n = input[0];
  let m = input[1];

  const answer1 = n + m;
  const answer2 = n - m;
  const answer3 = n * m;

  console.log(`${answer1}`);
  console.log(`${answer2}`);
  console.log(`${answer3}`);
}
let input = []; //solution함수 밖에 input 배열생성

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  //console.log(typeof line); 변수의 타입을 알고싶을때 사용

  //첫째줄, 둘째줄에 입력을 받고싶을때
  input.push(BigInt(line)); //입력한 값(line)의 type을 String->BigInt형으로 배열 input에 삽입

  if (input.length === 2) {
    //input의 길이가 2라면 (2개 입력을 했다면)
    solution(input); //함수실행
  }
});
