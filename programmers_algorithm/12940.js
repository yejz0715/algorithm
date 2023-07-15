//최대공약수와 최소공배수
function solution(n, m) {
  var answer = [];
  let minNum = Math.min(n, m);
  let maxNum = Math.max(n, m);
  let gcd = 0; //최대공약수
  let lcm = 0; //최소공배수

  for (let i = 1; i <= minNum; i++) {
    if (minNum % i == 0) {
      if (maxNum % i == 0) {
        gcd = i;
        if (gcd < i) {
          gcd = i;
        }
      }
    }
  }

  lcm = Math.floor((minNum * maxNum) / gcd);
  answer.push(gcd);
  answer.push(lcm);
  return answer;
}
