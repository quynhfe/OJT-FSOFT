import React, { useState } from 'react';
import InputOutputPanel from './InputOutputPanel';
import { mergeSort, quickSelect, kadane } from '../algorithms/divideConquer';

export default function DivideConquerDemo() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const run = () => {
    try {
      const arr = JSON.parse(input || '[4,3,13,2,12,7,23]');
      const res = {
        mergeSort: mergeSort(arr),
        kth4: quickSelect(arr, 4),
        maxSubarray: kadane([-2, -5, 6, -2, -3, 1, 5, -6]),
      };
      setOutput(JSON.stringify(res, null, 2));
    } catch (e) {
      setOutput('Error: ' + e.message);
    }
  };

  return (
    <div className='p-4 bg-white rounded-lg'>
      <h2 className='text-2xl font-bold mb-4 text-gray-800 border-b pb-2'>
        Divide & Conquer Algorithms
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
