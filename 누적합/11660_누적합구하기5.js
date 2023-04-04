const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

let answer = "";
const [n, m] = inputs.shift().split(" ").map(Number);
const g = Array.from(Array(1), () => Array(n + 2).fill(0));
const sum = Array.from(Array(n + 2), () => Array(n + 2).fill(0));

for (let i = 0; i < n; i++) {
  const arr = inputs.shift().split(" ").map(Number);
  g.push([0, ...arr, 0]);

  if (i === n - 1) g.push(Array(n + 2).fill(0));
}

for (let i = 1; i < n + 1; i++) {
  for (let j = 1; j < n + 1; j++) {
    const current = g[i][j] + sum[i - 1][j] + sum[i][j - 1] - sum[i - 1][j - 1];
    sum[i][j] = current;
  }
}

for (let i = 0; i < m; i++) {
  const [x1, y1, x2, y2] = inputs[i].split(" ").map(Number);

  const current =
    sum[x2][y2] - sum[x1 - 1][y2] - sum[x2][y1 - 1] + sum[x1 - 1][y1 - 1];

  answer += String(current) + "\n";
}

console.log(answer);
