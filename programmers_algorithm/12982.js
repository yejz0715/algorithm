//예산
function solution(d, budget) {
  d = d.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < d.length; i++) {
    if (budget > 0) {
      if (budget - d[i] < 0) {
        break;
      }
      budget -= d[i];
      count++;
    }
  }
  return count;
}
