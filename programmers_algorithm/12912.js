//두 정수 사이의 합
function solution(a, b) {
  let answer = 0;

  const minNum = a <= b ? a : b;
  const maxNum = a > b ? a : b;

  for (let i = minNum; i <= maxNum; i++) {
    answer += i;
  }

  return answer;
}
