// 세탁소 사장 동혁 거스름돈 계산
const readline = require("readline");
function solution(input) {
  let numArr = input;
  numArr.shift(); //shift:배열의 맨 앞에 요소 제거
  let answer = ""; //나눈 몫을 담아서 출력할 변수
  let qdnp = [25, 10, 5, 1]; //numArr[i]를 나누어야 할 동전을 순서대로 배열에 담음
  let remain = 0;
  for (i = 0; i <= numArr.length - 1; i++) {
    //입력값
    remain = numArr[i];
    for (j = 0; j <= qdnp.length - 1; j++) {
      //입력값을 나누어야할 동전
      if (remain >= qdnp[j]) {
        answer += Math.floor(remain / qdnp[j]) + " ";
        remain = remain % qdnp[j];
      } else {
        answer += 0 + " ";
      }
    }
    answer += "\n";
  }
  return answer;
}

let arr = []; //입력값 2줄로 받을수있게 만든 배열

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  arr.push(line);
  if (arr.length - 1 == arr[0]) console.log(solution(arr));
  //(입력한 배열의 갯수)-1 , 첫번째에 입력한 수가 같으면 함수 실행
});
