export function linearSearch(arr, key) {
  for (let i = 0; i < arr.length; i++) if (arr[i] === key) return i;
  return -1;
}

export function binarySearch(arr, key) {
  let l = 0,
    r = arr.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (arr[mid] === key) return mid;
    if (arr[mid] < key) l = mid + 1;
    else r = mid - 1;
  }
  return -1;
}

export function firstLastOccurrence(arr, key) {
  const res = [-1, -1];
  let l = 0,
    r = arr.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (arr[mid] >= key) r = mid - 1;
    else l = mid + 1;
  }
  if (l >= arr.length || arr[l] !== key) return res;
  res[0] = l;
  l = 0;
  r = arr.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (arr[mid] <= key) l = mid + 1;
    else r = mid - 1;
  }
  res[1] = r;
  return res;
}

export function insertPosition(arr, key) {
  let l = 0,
    r = arr.length;
  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    if (arr[mid] < key) l = mid + 1;
    else r = mid;
  }
  return l;
}

export function employeeRating(workload) {
  let maxStreak = 0,
    cur = 0;
  for (const h of workload) {
    if (h > 6) cur++;
    else {
      maxStreak = Math.max(maxStreak, cur);
      cur = 0;
    }
  }
  return Math.max(maxStreak, cur);
}
