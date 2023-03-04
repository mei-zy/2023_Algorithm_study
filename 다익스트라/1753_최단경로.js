class Heap {
  constructor() {
    this.heap = [[null, null]];
  }

  insert = (n) => {
    this.heap.push(n);

    let current = this.heap.length - 1;
    let parent = Number.parseInt(current / 2);

    // 부모가 자신보다 클때 부모와swap
    while (current !== 1 && this.heap[parent][1] >= this.heap[current][1]) {
      let swap = this.heap[parent];
      this.heap[parent] = this.heap[current];
      this.heap[current] = swap;

      current = parent;
      parent = Number.parseInt(current / 2);

      // 현재 current가 루트 노드일 경우 break
      if (current === 1) break;
    }
  };

  checkChild = (current) => {
    // 양쪽이 없는 경우
    if (current * 2 >= this.heap.length) return null;
    // 왼쪽만 있는 경우
    else if (current * 2 + 1 >= this.heap.length) return current * 2;
    else {
      // 모두 있는경우
      return this.heap[current * 2 + 1][1] < this.heap[current * 2][1]
        ? current * 2 + 1
        : current * 2;
    }
  };

  pop = () => {
    // null 인 경우
    if (this.heap.length === 1) return;
    if (this.heap.length === 2) return this.heap.pop();

    const n = this.heap[1];
    this.heap[1] = this.heap.pop();

    let current = 1;
    let child = this.checkChild(current);

    while (child && this.heap[current][1] > this.heap[child][1]) {
      const swap = this.heap[child];
      this.heap[child] = this.heap[current];
      this.heap[current] = swap;

      current = child;
      child = this.checkChild(current);
    }
    return n;
  };

  size = () => {
    return this.heap.length - 1;
  };
}

const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [v, e] = inputs.shift().split(" ").map(Number);
const start = +inputs.shift();
const answer = Array(v).fill(Infinity);
const graph = Array.from(Array(v), () => []);

for (let path of inputs) {
  const [v, e, w] = path.split(" ").map(Number);

  graph[v - 1].push([e - 1, w]);
}

const mh = new Heap();
mh.insert([start - 1, 0]);
answer[start - 1] = 0;

while (mh.size()) {
  const [cur, curW] = mh.pop();

  for (let [next, nextW] of graph[cur]) {
    if (nextW + curW < answer[next]) {
      mh.insert([next, nextW + curW]);
      answer[next] = nextW + curW;
    }
  }
}

for (let i = 0; i < v; i++) {
  if (answer[i] === Infinity) console.log("INF");
  else console.log(answer[i]);
}
