//나머지가 1이 되는 수 찾기
function solution(n) {
  let num = n % 1;
  let arr = [];
  for (let i = 0; i <= n; i++) {
    if (n % i === 1) {
      arr.push(i);
    }
  }
  console.log(num);

  return arr[0];
}
console.log(solution(10));
