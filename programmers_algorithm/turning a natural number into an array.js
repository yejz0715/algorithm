//자연수 뒤집어 배열로 만들기(turning a natural number into an array)
function solution(s) {
  let answer = s
    .toString()
    .split("")
    .map((item) => Number(item))
    .reverse();
  return answer;
}
console.log(solution(12345));
