//피보나치 수
function solution(n) {
  // 2<= n <=100,000 범위가 크기때문에 BigInt 사용
  //BigInt는 Number보다 큰 정수를 표현할 수 있는 내장 객체
  //BigInt끼리 연산 가능

  let fibo = [];

  fibo[0] = 0;
  fibo[1] = 1;

  for (let i = 2; i <= n; i++) {
    fibo[i] = BigInt(fibo[i - 1]) + BigInt(fibo[i - 2]);
  }

  return fibo[n] % BigInt(1234567);
}

console.log(solution(5));
