import React, { useState } from 'react';
import ArrayDemo from './components/ArrayDemo';
import StackQueueDemo from './components/StackQueueDemo';
import SearchingDemo from './components/SearchingDemo';
import SortingDemo from './components/SortingDemo';
import RecursionDemo from './components/RecursionDemo';
import DivideConquerDemo from './components/DivideConquerDemo';

export default function App() {
  const [tab, setTab] = useState('Array');
  const tabs = [
    'Array',
    'StackQueue',
    'Searching',
    'Sorting',
    'Recursion',
    'DivideConquer',
  ];

  const components = {
    Array: <ArrayDemo />,
    StackQueue: <StackQueueDemo />,
    Searching: <SearchingDemo />,
    Sorting: <SortingDemo />,
    Recursion: <RecursionDemo />,
    DivideConquer: <DivideConquerDemo />,
  };

  return (
    <div className='bg-light min-vh-100 d-flex align-items-center py-4'>
      <div className='container-fluid'>
        <div
          className='w-100 mx-auto'
          style={{ maxWidth: '1400px' }}>
          <header className='text-center mb-4'>
            <h1 className='fw-bold'>DSA Playground</h1>
          </header>

          <div className='card shadow-lg rounded-4'>
            <div className='row g-0'>
              <aside className='col-md-3 col-lg-2 border-end'>
                <div className='p-3'>
                  <div className='list-group'>
                    {tabs.map((t) => (
                      <button
                        key={t}
                        onClick={() => setTab(t)}
                        className={`list-group-item list-group-item-action ${
                          tab === t ? 'active' : ''
                        }`}>
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </aside>

              <main className='col-md-9 col-lg-10'>
                <div className='p-4 p-md-5'>{components[tab]}</div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
