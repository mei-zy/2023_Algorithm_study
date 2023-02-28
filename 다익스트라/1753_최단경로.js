const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [v, e] = inputs.shift().split(" ").map(Number);
const start = +inputs.shift();
const answer = Array(v).fill(Infinity);
const visited = Array(v).fill(0);
// const visited = Array.from(Array(v), () => Array(v).fill(0));
const graph = Array.from(Array(v), () => []);

for (let path of inputs) {
  const [v, e, w] = path.split(" ").map(Number);

  graph[v - 1].push([e - 1, w]);
}

let q = [start];
visited[start] = 1;
answer[start] = 0;

while (q.length) {
  const x = q.shift();

  for (let [next, w] of graph[x]) {
    if (visited[next]) continue;

    const cur = answer[x] + w;
    if (cur < answer[next]) answer[next] = cur;
    visited[next] = 1;
  }
}

for (let i = 0; i < answer.length; i++) {
  if (i === start - 1) {
    console.log(0);
    continue;
  }

  const target = answer[i];
  if (target === Infinity) console.log("INF");
  else console.log(target);
}
