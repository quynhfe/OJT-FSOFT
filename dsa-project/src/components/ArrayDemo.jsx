import React, { useState } from 'react';
import InputOutputPanel from './InputOutputPanel';
import {
  moveZerosToEnd,
  sort012,
  hasPairWithSum,
  maxProductOfTwo,
  threeSumZero,
} from '../algorithms/array';

export default function ArrayDemo() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const run = () => {
    try {
      const arr = JSON.parse(input || '[4,8,0,0,2,0,1,0]');
      const res = {
        moveZeros: moveZerosToEnd(arr),
        sort012: sort012(arr.map((x) => ((x % 3) + 3) % 3)),
        pairSum10: hasPairWithSum(arr, 10),
        maxProd: maxProductOfTwo(arr),
        threeSum: threeSumZero(arr),
      };
      setOutput(JSON.stringify(res, null, 2));
    } catch (e) {
      setOutput('Error: ' + e.message);
    }
  };

  return (
    <div>
      <h2 className='display-6 fw-bold border-bottom pb-2 mb-4'>
        Array Algorithms
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
