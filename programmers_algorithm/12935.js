//제일 작은 수 제거하기
function solution(arr) {
  let answer = [];
  if (arr.length !== 1) {
    const minNum = Math.min(...arr);
    answer = arr.filter((item) => item !== minNum);
  } else {
    answer.push(-1);
  }

  return answer;
}
console.log(solution([4, 3, 2, 1]));
