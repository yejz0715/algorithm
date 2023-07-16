//소수만들기
function solution(nums) {
  let answer = 0;

  const isPrime = (sumNum) => {
    for (let g = 2; g < sumNum; g++) {
      if (sumNum % g === 0) {
        return false;
      }
    }
    return true;
  };

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let sumNum = nums[i] + nums[j] + nums[k];
        if (isPrime(sumNum)) {
          answer++;
        }
      }
    }
  }

  return answer;
}
