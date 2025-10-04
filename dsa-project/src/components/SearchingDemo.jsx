import React, { useState } from 'react';
import InputOutputPanel from './InputOutputPanel';
import {
  linearSearch,
  binarySearch,
  firstLastOccurrence,
  insertPosition,
  employeeRating,
} from '../algorithms/searching';

export default function SearchingDemo() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const run = () => {
    try {
      const obj = input
        ? JSON.parse(input)
        : { arr: [1, 2, 3, 3, 3, 4, 5], key: 3 };
      const res = {
        linear: linearSearch(obj.arr, obj.key),
        binary: binarySearch(obj.arr, obj.key),
        firstLast: firstLastOccurrence(obj.arr, obj.key),
        insertPos: insertPosition(obj.arr, obj.key),
        rating: employeeRating([7, 8, 5, 7, 7, 8, 4, 7]), // example
      };
      setOutput(JSON.stringify(res, null, 2));
    } catch (e) {
      setOutput('Error: ' + e.message);
    }
  };

  return (
    <div className='p-4 bg-white rounded-lg'>
      <h2 className='text-2xl font-bold mb-4 text-gray-800 border-b pb-2'>
        Searching Algorithms
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
