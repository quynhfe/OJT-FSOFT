import React, { useState } from 'react';
import InputOutputPanel from './InputOutputPanel';
import {
  recursiveSum,
  reverseArrayRec,
  gcd,
  removeAdjacentDuplicates,
} from '../algorithms/recursion';

export default function RecursionDemo() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const run = () => {
    try {
      const arr = JSON.parse(input || '[1,2,3,4]');
      const res = {
        recursiveSum: recursiveSum(arr),
        reverse: reverseArrayRec(arr),
        gcd48_18: gcd(48, 18),
        removeDup: removeAdjacentDuplicates('azxxzy'),
      };
      setOutput(JSON.stringify(res, null, 2));
    } catch (e) {
      setOutput('Error: ' + e.message);
    }
  };

  return (
    <div className='p-4 bg-white rounded-lg'>
      <h2 className='text-2xl font-bold mb-4 text-gray-800 border-b pb-2'>
        Recursion Algorithms
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
