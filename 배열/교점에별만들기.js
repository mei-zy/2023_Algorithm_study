// https://school.programmers.co.kr/learn/courses/30/lessons/87377
function solution(line) {
  var answer = [];
  let len = line.length;
  const pos = new Set();
  let [minX, minY] = Array(2).fill(Infinity);
  let [maxX, maxY] = Array(2).fill(-Infinity);

  for (let i = 0; i < len - 1; i++) {
    const [a, b, e] = line[i];
    for (let j = i + 1; j < len; j++) {
      const [c, d, f] = line[j];

      if (a * d - b * c === 0) continue;

      const x = (b * f - e * d) / (a * d - b * c);
      const y = (e * c - a * f) / (a * d - b * c);

      if (!Number.isInteger(x) || !Number.isInteger(y)) continue;

      pos.add([x, y]);

      minX = Math.min(x, minX);
      minY = Math.min(y, minY);
      maxX = Math.max(x, maxX);
      maxY = Math.max(y, maxY);
    }
  }
  const nx = maxX - minX;
  const ny = maxY - minY;

  const arr = Array.from(Array(ny + 1), () => Array(nx + 1).fill("."));

  for (let [x, y] of pos) {
    const nx = x > 0 ? x - minX : x + Math.abs(minX);
    const ny = y > 0 ? y - minY : y + Math.abs(minY);
    arr[ny][nx] = "*";
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    answer.push(arr[i].join(""));
  }

  return answer;
}
