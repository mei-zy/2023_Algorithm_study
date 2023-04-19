function solution(n) {
  var answer = 0;
  const arr = Array(100001).fill(0);

  arr[0] = 0;
  arr[1] = 1;

  for (let i = 2; i <= n; i++) {
    let sum = arr[i - 1] + arr[i - 2];
    arr[i] = sum % 1234567;
  }

  answer = arr[n];

  return answer;
}
