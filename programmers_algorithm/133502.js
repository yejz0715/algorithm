//햄버거 만들기_배열의길이와 인덱스를 이용해서 풀었음
function solution(ingredient) {
  let arr = [];
  let count = 0;

  for (let i = 0; i < ingredient.length; i++) {
    arr.push(ingredient[i]);
    if (
      arr[arr.length - 4] === 1 &&
      arr[arr.length - 3] === 2 &&
      arr[arr.length - 2] === 3 &&
      arr[arr.length - 1] === 1
    ) {
      for (let j = 0; j < 4; j++) {
        arr.pop();
      }
      count++;
    }
  }

  return count;
}
