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
  getSize() {
    return this.size;
  }
}

const makeQ = (q) => {
  const nq = new Q();
  let sum = 0;

  for (let x of q) {
    nq.enq(x);
    sum += x;
  }

  return [sum, nq];
};
function solution(queue1, queue2) {
  var answer = -1;

  let count = 0;

  let [q1Sum, q1] = makeQ(queue1);
  let [q2Sum, q2] = makeQ(queue2);

  let Max = (queue1.length + queue2.length) * 2;

  while (count < Max) {
    if (q1Sum < q2Sum) {
      const n = q2.deq();
      q1Sum += n;
      q2Sum -= n;
      q1.enq(n);
    } else if (q2Sum < q1Sum) {
      const n = q1.deq();
      q2Sum += n;
      q1Sum -= n;
      q2.enq(n);
    } else {
      return count;
    }

    count++;
  }
  return answer;
}

console.log(solution([1, 1, 1, 8, 10, 9], [1, 1, 1, 1, 1, 1]));
