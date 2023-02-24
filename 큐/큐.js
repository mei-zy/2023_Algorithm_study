class Node {
  constructor(n) {
    this.value = n;
    this.next = null;
  }
}

class Q {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enq(n) {
    const node = new Node(n);

    if (!this.size) this.head = node;
    else this.tail.next = node;

    this.tail = node;
    this.size++;
  }

  deq() {
    if (!this.size) return;

    const n = this.head.value;
    this.head = this.head.next;

    // head만 남고 next가 없는 경우 꼬리를 null로 작업해준다.
    if (!this.head) this.tail = null;
    this.size--;
    return n;
  }
}

const nq = new Q();

nq.enq(3);
nq.enq(2);
nq.enq(1);
