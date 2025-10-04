export function selectionSort(a) {
  const arr = a.slice();
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++)
      if (arr[j] < arr[minIdx]) minIdx = j;
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}

export function insertionSort(a) {
  const arr = a.slice();
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

export function countingSort(a) {
  const arr = a.slice();
  const mx = Math.max(...arr),
    mn = Math.min(...arr);
  const range = mx - mn + 1;
  const count = new Array(range).fill(0);
  for (const v of arr) count[v - mn]++;
  const res = [];
  for (let i = 0; i < count.length; i++) while (count[i]--) res.push(i + mn);
  return res;
}

export function radixSort(a) {
  const arr = a.slice();
  let max = Math.max(...arr, 0),
    exp = 1;
  while (Math.floor(max / exp) > 0) {
    const buckets = Array.from({ length: 10 }, () => []);
    for (const num of arr) buckets[Math.floor(num / exp) % 10].push(num);
    arr.length = 0;
    for (const b of buckets) arr.push(...b);
    exp *= 10;
  }
  return arr;
}

export function timSort(a) {
  return a.slice().sort((x, y) => x - y);
}
