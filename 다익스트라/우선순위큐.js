class Heap {
  constructor() {
    this.heap = [null];
  }

  insert = (n) => {
    this.heap.push(n);

    let current = this.heap.length - 1;
    let parent = Number.parseInt(current / 2);

    // 부모가 자신보다 클때 부모와swap
    while (this.heap[parent] >= this.heap[current]) {
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
      return this.heap[current * 2 + 1] < this.heap[current * 2]
        ? current * 2 + 1
        : current * 2;
    }
  };

  pop = () => {
    // null 인 경우
    if (this.heap.length === 1) return;

    const n = this.heap[1];
    this.heap[1] = this.heap.pop();

    let current = 1;
    let child = this.checkChild(current);

    while (child && this.heap[current] > this.heap[child]) {
      const swap = this.heap[child];
      this.heap[child] = this.heap[current];
      this.heap[current] = swap;

      current = child;
      child = this.checkChild(current);
    }
    return n;
  };

  show = () => {
    for (let i = 1; i < this.heap.length; i++) console.log(this.heap[i]);
  };
}

const mh = new Heap();
mh.insert(3);
mh.insert(5);
mh.insert(6);
mh.insert(9);
mh.insert(3);
mh.insert(3);
mh.insert(12);
mh.insert(1);

mh.show();
