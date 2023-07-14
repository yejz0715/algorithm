//정수 제곱근 판별
function solution(n) {
  let answer = 0;

  if (n % Math.sqrt(n) === 0) {
    answer = Math.sqrt(n) + 1;
    return Math.pow(answer, 2);
  } else {
    return -1;
  }
}
