const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

let answer = "";
const g = [];
const [n, m] = inputs.shift().split(" ").map(Number);
const sum = Array.from(Array(n), () => Array(n).fill(0));

for (let i = 0; i < n; i++) {
  const arr = inputs.shift().split(" ").map(Number);
  g.push(arr);
}

sum[0][0] = g[0][0];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (!i && !j) continue;

    let top = i - 1;
    let left = j - 1;

    const current = g[i][j];

    if (top < 0) {
      // left 만 한번 더해준다.
      sum[i][j] = sum[i][left] + current;
    } else if (left < 0) {
      // top값만 더해준다 .
      sum[i][j] = sum[top][j] + current;
    } else {
      // 대각선 한번 더 빼줘야한다.
      sum[i][j] = sum[top][j] + sum[i][left] + current - sum[top][left];
    }
  }
}

for (let i = 0; i < m; i++) {
  const [x1, y1, x2, y2] = inputs
    .shift()
    .split(" ")
    .map((item) => +item - 1);

  let total = sum[x2][y2];

  const [topx, topy] = [x1 - 1, y2];
  const [leftx, lefty] = [x2, y1 - 1];

  if (topx >= 0 && topy >= 0 && leftx >= 0 && lefty >= 0) {
    // 모두 있는 경우
    total += sum[topx][lefty];
  }
  if (topx >= 0 && topy >= 0) {
    total -= sum[topx][topy];
  }
  if (leftx >= 0 && lefty >= 0) {
    total -= sum[leftx][lefty];
  }

  answer += total + "\n";
}

console.log(answer);
