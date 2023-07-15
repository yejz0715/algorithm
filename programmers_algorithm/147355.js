//크기가 작은 부분 문자열
function solution(t, p) {
  let count = 0;
  let num = p.length;

  for (let i = 0; i < t.length - num + 1; i++) {
    let string = t.slice(i, i + num);
    if (Number(string) <= Number(p)) {
      count++;
    }
  }
  return count;
}
