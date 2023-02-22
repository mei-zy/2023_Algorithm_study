const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +inputs.shift();
const map = [];
const [dx, dy] = [
  [0, -1, 0, 1],
  [-1, 0, 1, 0],
];

let maxNum = -Infinity;
let answer = 0;

for (let item of inputs) {
  const result = item.split(" ").map((el) => {
    if (maxNum < el) maxNum = el;
    return el;
  });
  map.push(result);
}

const [r, s] = [map.length, map[0].length];

const bfs = (x, y, visited, exc) => {
  let q = [[x, y]];

  while (q.length) {
    const [tx, ty] = q.shift();

    for (let i = 0; i < 4; i++) {
      const [rx, ry] = [tx + dx[i], ty + dy[i]];

      if (
        rx >= 0 &&
        rx < r &&
        ry >= 0 &&
        ry < s &&
        !visited[rx][ry] &&
        map[rx][ry] > exc
      ) {
        visited[rx][ry] = 1;
        q.push([rx, ry]);
      }
    }
  }
};

for (let i = 0; i <= maxNum; i++) {
  let visited = Array.from(Array(r), () => Array(s));

  let count = 0;

  for (let j = 0; j < r; j++) {
    for (let k = 0; k < s; k++) {
      if (!visited[j][k] && map[j][k] > i) {
        visited[j][k] = 1;
        bfs(j, k, visited, i);
        count++;
      }
    }
  }

  if (count > answer) answer = count;
}

console.log(answer);
