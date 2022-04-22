//nArr배열에서 x보다 큰수 출력
const readline = require("readline");
function solution(input) {
  let numArr = input[0].split(" ");
  let x = Number(numArr[1]);
  let nArr = input[1].split(" ");
  let answer = [];

  nArr.map((num) => (Number(num) > x ? answer.push(Number(num)) : null));
  //삼행연산 true답만 있으면 false에는 null 입력
  return answer;
}

let arr = []; // 2줄로 입력할 값을 넣을 수 있게 함수 밖에 arr 배열을 만들
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//2줄로 입력
rl.on("line", (line) => {
  arr.push(line); //입력값을 arr배열에 넣어줌
  //push():메소드, 배열 맨끝에 추가 <-> pop():배열 맨끝 삭제
  if (arr.length === 2) console.log(solution(arr));
  //배열의 길이(입력값) 2가 되면 solution()함수실행
});
