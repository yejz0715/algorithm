//같은 숫자는 싫어
function solution(input) {
  let answer = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i - 1] === input[i]) {
      if (input[i] !== input[i + 1]) {
        answer.push(input[i]);
      }
    } else {
      if (input[i] !== input[i + 1]) {
        answer.push(input[i]);
      }
    }
  }
  return answer;
}
