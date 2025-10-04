export function moveZerosToEnd(arr) {
  const res = arr.slice();
  let j = 0;
  for (let i = 0; i < res.length; i++) if (res[i] !== 0) res[j++] = res[i];
  while (j < res.length) res[j++] = 0;
  return res;
}

export function sort012(arr) {
  const a = arr.slice();
  let low = 0,
    mid = 0,
    high = a.length - 1;
  while (mid <= high) {
    if (a[mid] === 0) {
      [a[low], a[mid]] = [a[mid], a[low]];
      low++;
      mid++;
    } else if (a[mid] === 1) mid++;
    else {
      [a[mid], a[high]] = [a[high], a[mid]];
      high--;
    }
  }
  return a;
}

export function hasPairWithSum(arr, goal) {
  const seen = new Set();
  for (const x of arr) {
    if (seen.has(goal - x)) return true;
    seen.add(x);
  }
  return false;
}

export function maxProductOfTwo(arr) {
  if (arr.length < 2) return null;
  let max1 = -Infinity,
    max2 = -Infinity;
  let min1 = Infinity,
    min2 = Infinity;
  for (const x of arr) {
    if (x > max1) {
      max2 = max1;
      max1 = x;
    } else if (x > max2) max2 = x;
    if (x < min1) {
      min2 = min1;
      min1 = x;
    } else if (x < min2) min2 = x;
  }
  return Math.max(max1 * max2, min1 * min2);
}

export function threeSumZero(arr) {
  const res = [];
  const a = arr.slice().sort((x, y) => x - y);
  for (let i = 0; i < a.length - 2; i++) {
    if (i > 0 && a[i] === a[i - 1]) continue;
    let l = i + 1,
      r = a.length - 1;
    while (l < r) {
      const s = a[i] + a[l] + a[r];
      if (s === 0) {
        res.push([a[i], a[l], a[r]]);
        while (l < r && a[l] === a[l + 1]) l++;
        while (l < r && a[r] === a[r - 1]) r--;
        l++;
        r--;
      } else if (s < 0) l++;
      else r--;
    }
  }
  return res;
}
