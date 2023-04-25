const available = (people, stones, max) => {
  let count = 0;

  for (let stone of stones) {
    if (stone < people) {
      count++;
      if (count >= max) return false;
    } else count = 0;
  }

  return true;
};

function solution(stones, k) {
  var answer = 0;
  let left = 0;
  let right = 200000000;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const result = available(mid, stones, k);

    if (result) {
      left = mid + 1;
      answer = mid;
    } else {
      right = mid;
    }
  }

  return answer;
}
