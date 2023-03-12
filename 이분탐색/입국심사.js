function solution(n, times) {
  times.sort((a, b) => a - b);
  let left = 0;
  let right = times[0] * n;
  let answer = 0;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    let people = 0;

    for (let time of times) {
      const p = Math.floor(mid / time);
      people += p;
    }

    if (people < n) left = mid + 1;
    else {
      right = mid - 1;
      answer = mid;
    }
  }

  return answer;
}
