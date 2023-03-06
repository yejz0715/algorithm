//최댓값과 최솟값(max_min)
function solution(s) {
  let items = s.split(" ").sort((a, b) => Number(a) - Number(b));
  let answer = items[0] + " " + items[items.length - 1];
  return answer;
}

console.log(solution("1 2 3 4"));
