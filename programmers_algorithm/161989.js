//덧칠하기
function solution(n, m, section) {
  let count = 0;
  let num = 0;
  section.map((item) => {
    if (num < item) {
      num = item + m - 1;
      count++;
    }
  });

  return count;
}
