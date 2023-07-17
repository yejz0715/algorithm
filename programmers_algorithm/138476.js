//귤 고르기
function solution(k, tangerine) {
  const obj = {};
  let count = 0;

  //중복개수세기
  tangerine.forEach((x) => {
    if (obj[x]) {
      obj[x] = obj[x] + 1;
    } else {
      obj[x] = 0 + 1;
    }
  });
  //객체->배열로
  let arr = Object.entries(obj);

  arr.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < arr.length; i++) {
    if (k > 0) {
      k -= arr[i][1];
      count++;
    }
  }
  return count;
}
