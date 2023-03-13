function solution(n, times) {
  var answer = 0;
  times.sort((a, b) => a - b);

  let l = 1;
  let r = n * times[0];

  while (l <= r) {
    let m = Math.floor((r + l) / 2);
    let cnt = 0;
    for (e of times) {
      cnt += Math.floor(m / e);
      if (cnt > n) break; // cnt 오버플러우 방지
    }

    if (cnt < n) {
      l = m + 1;
    } else {
      r = m - 1;
      answer = m;
    }
  }
  return answer;
}
