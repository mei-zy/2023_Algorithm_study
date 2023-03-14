function solution(n, times) {
  times.sort((a, b) => a - b);
  let left = times[0];
  let right = times[times.length - 1] * n;
  let mid;

  while (left <= right) {
    mid = parseInt((left + right) / 2);
    let people = 0;

    for (let time of times) {
      const p = parseInt(mid / time);
      people += p;
    }

    if (people < n) left = mid + 1;
    else right = mid - 1;
  }

  return mid;
}
