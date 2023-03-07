//문자열 내 p와 y의 개수(p_y)
function solution(s) {
  let answer = "";
  s = s.toLowerCase();
  let p = s.split("").filter((x) => x === "p");
  let y = s.split("").filter((x) => x === "y");

  if (p.length === y.length) {
    return true;
  } else {
    return false;
  }
}
console.log(solution("pPoooyY"));
