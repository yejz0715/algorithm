//average 평균구하기
function solution(arr) {
  let agv =
    arr.map((item) => Number(item)).reduce((a, b) => a + b) / arr.length;
  return agv;
}
console.log(solution([1, 2, 3, 4]));
