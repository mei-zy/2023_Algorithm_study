const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

let answer = -1;

const n = +inputs.shift();
const [a, b] = inputs.shift().split(" ").map(Number);
inputs.shift();
const family = Array.from(Array(n + 1), () => []);

for (let item of inputs) {
  const [par, chi] = item.split(" ").map(Number);
  family[par].push(chi);
  family[chi].push(par);
}

const visited = Array(n + 1).fill(0);
visited[a] = 1;

const search = (curr, L) => {
  if (curr === b) {
    answer = L;
    return;
  }

  for (let x of family[curr]) {
    if (!visited[x]) {
      visited[x] = 1;
      search(x, L + 1);
      visited[x] = 0;
    }
  }
};

search(a, 0);

console.log(answer);
