export class ArrayStack {
  constructor() {
    this.data = [];
  }
  push(x) {
    this.data.push(x);
  }
  pop() {
    return this.data.pop();
  }
  top() {
    return this.data[this.data.length - 1];
  }
  size() {
    return this.data.length;
  }
  isEmpty() {
    return this.data.length === 0;
  }
}

export class ArrayQueue {
  constructor() {
    this.data = [];
    this.head = 0;
  }
  enqueue(x) {
    this.data.push(x);
  }
  dequeue() {
    if (this.head >= this.data.length) return undefined;
    const val = this.data[this.head++];
    if (this.head > 1000) {
      this.data = this.data.slice(this.head);
      this.head = 0;
    }
    return val;
  }
  front() {
    return this.data[this.head];
  }
  back() {
    return this.data[this.data.length - 1];
  }
  size() {
    return this.data.length - this.head;
  }
  isEmpty() {
    return this.size() === 0;
  }
}

export function rottenApples(grid) {
  const n = grid.length,
    m = grid[0]?.length || 0;
  const q = [];
  let fresh = 0;
  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 2) q.push([i, j, 0]);
      else if (grid[i][j] === 1) fresh++;
    }
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let days = 0;
  while (q.length && fresh > 0) {
    const [x, y, d] = q.shift();
    for (const [dx, dy] of dirs) {
      const nx = x + dx,
        ny = y + dy;
      if (nx >= 0 && nx < n && ny >= 0 && ny < m && grid[nx][ny] === 1) {
        grid[nx][ny] = 2;
        fresh--;
        q.push([nx, ny, d + 1]);
        days = Math.max(days, d + 1);
      }
    }
  }
  return fresh === 0 ? days : -1;
}
