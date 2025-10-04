export function mergeSort(a) {
  if (a.length <= 1) return a.slice();
  const mid = Math.floor(a.length / 2);
  const L = mergeSort(a.slice(0, mid));
  const R = mergeSort(a.slice(mid));
  const res = [];
  let i = 0,
    j = 0;
  while (i < L.length && j < R.length) {
    if (L[i] <= R[j]) res.push(L[i++]);
    else res.push(R[j++]);
  }
  while (i < L.length) res.push(L[i++]);
  while (j < R.length) res.push(R[j++]);
  return res;
}

export function quickSelect(a, k) {
  const arr = a.slice();
  function select(l, r, k) {
    if (l === r) return arr[l];
    const pivot = arr[l + Math.floor(Math.random() * (r - l + 1))];
    let pl = l,
      pr = r,
      i = l;
    while (i <= pr) {
      if (arr[i] < pivot) [arr[pl++], arr[i++]] = [arr[i], arr[pl]];
      else if (arr[i] > pivot) [arr[i], arr[pr--]] = [arr[pr], arr[i]];
      else i++;
    }
    const leftSize = pl - l;
    if (k <= leftSize) return select(l, pl - 1, k);
    const equalSize = pr - pl + 1;
    if (k <= leftSize + equalSize) return pivot;
    return select(pr + 1, r, k - leftSize - equalSize);
  }
  return select(0, arr.length - 1, k);
}

export function kadane(a) {
  let maxSoFar = -Infinity,
    maxEnding = 0;
  for (const x of a) {
    maxEnding = Math.max(x, maxEnding + x);
    maxSoFar = Math.max(maxSoFar, maxEnding);
  }
  return maxSoFar;
}
