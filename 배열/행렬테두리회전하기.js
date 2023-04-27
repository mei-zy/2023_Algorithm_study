const fillArray = (rows, columns, arr) => {
  let count = 1;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      arr[i][j] = count;
      count++;
    }
  }
};

const rotateArr = (x1, y1, x2, y2, arr) => {
  let tmp = arr[x1][y1];
  let min = tmp;

  // 위에
  for (let i = y1 + 1; i <= y2; i++) {
    const cur = arr[x1][i];
    arr[x1][i] = tmp;
    tmp = cur;
    min = Math.min(min, tmp);
  }
  // 오른쪽
  for (let i = x1 + 1; i <= x2; i++) {
    const cur = arr[i][y2];
    arr[i][y2] = tmp;
    tmp = cur;
    min = Math.min(min, tmp);
  }

  // 밑
  for (let i = y2 - 1; i >= y1; i--) {
    const cur = arr[x2][i];
    arr[x2][i] = tmp;
    tmp = cur;
    min = Math.min(min, tmp);
  }

  for (let i = x2 - 1; i >= x1; i--) {
    const cur = arr[i][y1];
    arr[i][y1] = tmp;
    tmp = cur;
    min = Math.min(min, tmp);
  }

  return min;
};

function solution(rows, columns, queries) {
  var answer = [];
  const arr = Array.from(Array(rows), () => Array(columns));
  fillArray(rows, columns, arr);

  for (let i = 0; i < queries.length; i++) {
    const [a, b, c, d] = queries[i];
    const min = rotateArr(a - 1, b - 1, c - 1, d - 1, arr);
    answer.push(min);
  }

  return answer;
}

console.log(
  solution(6, 6, [
    [2, 2, 5, 4],
    [3, 3, 6, 6],
    [5, 1, 6, 3],
  ])
);
