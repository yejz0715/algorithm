// 기사단의 무기
function solution(number, limit, power) {
  let answer = 0;

  //1-number까지의 수
  for (let i = 1; i <= number; i++) {
    let num = Number(i);
    let count = 0;

    //그 수의 약수의 개수 (제곱으로 구함)
    for (let j = 1; j * j <= num; j++) {
      if (j * j === num) {
        count++;
      } else if (num % j === 0) {
        count += 2;
      }
    }
    if (count <= limit) {
      answer += count;
    } else {
      answer += power;
    }
  }
  return answer;
}
