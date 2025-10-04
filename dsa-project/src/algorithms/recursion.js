export function recursiveSum(a) {
  if (a.length === 0) return 0;
  if (a.length === 1) return a[0];
  const mid = Math.floor(a.length / 2);
  return recursiveSum(a.slice(0, mid)) + recursiveSum(a.slice(mid));
}

export function reverseArrayRec(a) {
  if (a.length <= 1) return a.slice();
  const first = a[0];
  const rest = reverseArrayRec(a.slice(1));
  rest.push(first);
  return rest;
}

export function gcd(a, b) {
  return b === 0 ? Math.abs(a) : gcd(b, a % b);
}

export function removeAdjacentDuplicates(s) {
  if (s.length <= 1) return s;
  if (s[0] === s[1]) {
    let i = 1;
    while (i < s.length && s[i] === s[0]) i++;
    return removeAdjacentDuplicates(s.slice(i));
  }
  return s[0] + removeAdjacentDuplicates(s.slice(1));
}
