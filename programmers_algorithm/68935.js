//3진법 뒤집기 (10진법-> 3진법-> 앞,뒤 반전-> 10진법)
function solution(n) {
  let answer = n.toString(3).split("").reverse().join("");
  return parseInt(answer, 3);
}
