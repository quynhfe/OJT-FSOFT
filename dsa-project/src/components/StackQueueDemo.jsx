import React, { useState } from 'react';
import InputOutputPanel from './InputOutputPanel';
import { ArrayStack, ArrayQueue, rottenApples } from '../algorithms/stackQueue';

export default function StackQueueDemo() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const run = () => {
    try {
      const grid = input
        ? JSON.parse(input)
        : [
            [2, 1, 0],
            [1, 1, 0],
            [0, 1, 1],
          ];

      const st = new ArrayStack();
      st.push(1);
      st.push(2);
      st.push(3);
      const popped = st.pop();

      const q = new ArrayQueue();
      q.enqueue('A');
      q.enqueue('B');
      const dq = q.dequeue();

      const days = rottenApples(grid.map((row) => [...row]));

      const res = {
        stack: { afterOps: st.data, popped },
        queue: { afterOps: q.data.slice(q.head), dequeued: dq },
        rottenApples: days,
      };
      setOutput(JSON.stringify(res, null, 2));
    } catch (e) {
      setOutput('Error: ' + e.message);
    }
  };

  return (
    <div className='p-4 bg-white rounded-lg'>
      <h2 className='text-2xl font-bold mb-4 text-gray-800 border-b pb-2'>
        Stack & Queue Algorithms
      </h2>
      <InputOutputPanel
        input={input}
        setInput={setInput}
        output={output}
        onRun={run}
      />
    </div>
  );
}
