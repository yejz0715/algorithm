//부족한 금액 계산하기
function solution(price, money, count) {
  let num = 0;
  for (let i = 1; i <= count; i++) {
    num += i;
  }
  return money > price * num ? 0 : price * num - money;
}
