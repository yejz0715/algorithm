const testArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// 1. 3*3 배열이 주어질 때, 배열의 요소가 홀수인 경우를 찾아 answer에 넣고, 출력하여 보세요.
function printOddNum(arr) {
  let answer = [];
  for (i = 0; i <= arr.length - 1; i++) {
    for (j = 0; j <= 2; j++) {
      if (arr[i][j] % 2 == 1) {
        answer += arr[i][j];
      }
    }
  }

  return answer;
}
console.log(printOddNum(testArr));

// 2. 3*3 배열이 주어질 때, 배열를 다음과 같은 형태로 출력하여 보세요.
// 출력 형태 : 9, 8, 7, 6, 5, 4, 3, 2, 1 (-> 마지막 요소에 뒤에는 ,가 없음)
function reverseArray(arr) {
  let answer = "";
  for (i = 2; i >= 0; i--) {
    for (j = 2; j >= 0; j--) {
      //console.log(arr[i][j]);
      answer += arr[i][j] + ", ";
    }
  }
  answer = answer.substring(0, 25);

  return answer;
}
console.log(reverseArray(testArr));
