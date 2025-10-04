import React from 'react';

export default function InputOutputPanel({ input, setInput, output, onRun }) {
  return (
    <div className='d-flex flex-column gap-4'>
      <div>
        <label
          htmlFor='input-textarea'
          className='form-label'>
          Input (JSON):
        </label>
        <textarea
          id='input-textarea'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='e.g. [4, 8, 0, 0, 2, 0, 1, 0]&#10;Để trống để dùng dữ liệu mặc định.'
          className='form-control font-monospace'
          rows='5'
        />
      </div>

      <div className='d-flex align-items-center gap-2'>
        <button
          onClick={onRun}
          className='btn btn-success'>
          Run
        </button>
        <button
          onClick={() => setInput('')}
          className='btn btn-secondary'>
          Clear
        </button>
      </div>

      <div>
        <label
          htmlFor='output-pre'
          className='form-label'>
          Output:
        </label>
        <pre
          id='output-pre'
          className='bg-dark text-white rounded p-3'
          style={{ minHeight: '150px' }}>
          <code>{output || 'Click "Run" to see the result...'}</code>
        </pre>
      </div>
    </div>
  );
}
