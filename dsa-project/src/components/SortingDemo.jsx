import React, { useState } from 'react';
import InputOutputPanel from './InputOutputPanel';
import {
  selectionSort,
  insertionSort,
  countingSort,
  radixSort,
  timSort,
} from '../algorithms/sorting';

export default function SortingDemo() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const run = () => {
    try {
      const arr = JSON.parse(input || '[5,2,9,1,5,6]');
      const res = {
        selection: selectionSort(arr),
        insertion: insertionSort(arr),
        counting: countingSort(arr),
        radix: radixSort(arr.filter((x) => x >= 0)),
        tim: timSort(arr),
      };
      setOutput(JSON.stringify(res, null, 2));
    } catch (e) {
      setOutput('Error: ' + e.message);
    }
  };

  return (
    <div className='p-4 bg-white rounded-lg'>
      <h2 className='text-2xl font-bold mb-4 text-gray-800 border-b pb-2'>
        Sorting Algorithms
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
