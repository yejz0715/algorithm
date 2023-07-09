//하샤드 수
function solution(x) {
  let number = x
    .toString()
    .split("")
    .map((item) => Number(item))
    .reduce((a, b) => a + b);
  console.log(number);
  if (x % number === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(solution(10));
