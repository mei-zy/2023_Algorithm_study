function solution(price, money, count) {
  var answer = -1;

  let cur = 0;

  for (let i = 1; i <= count; i++) cur += price * i;

  answer = money >= cur ? 0 : cur - money;
  return answer;
}
