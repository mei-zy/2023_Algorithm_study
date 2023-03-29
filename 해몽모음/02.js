/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let answer = 0;
  const maxLeft = [0];
  const maxRight = Array(height.length).fill(0);
  maxRight[maxRight.length - 1] = 0;

  // left부터 채우기
  for (let i = 1; i < height.length; i++) {
    if (maxLeft[i - 1] < height[i - 1]) {
      maxLeft.push(height[i - 1]);
    } else {
      maxLeft.push(maxLeft[i - 1]);
    }
  }

  // right 채우기
  for (let i = height.length - 2; i >= 0; i--) {
    if (height[i + 1] > maxRight[i + 1]) {
      maxRight[i] = height[i + 1];
    } else {
      maxRight[i] = maxRight[i + 1];
    }
  }

  for (let i = 0; i < height.length; i++) {
    const x = Math.min(maxLeft[i], maxRight[i]);

    if (x > height[i]) {
      answer += x - height[i];
    }
  }

  return answer;
};
