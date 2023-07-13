//없는 숫자 더하기
function solution(numbers) {
  numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  let answer = 0;
  numArr.filter((item) => {
    if (numbers.includes(item) === false) {
      answer += item;
    }
  });
  return answer;
}
console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
