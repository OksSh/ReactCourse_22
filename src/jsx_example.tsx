import React, { createElement as e, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return e('div', { className: 'container' }, [
    e('h1', { className: 'title', key: 1 }, `Counter: ${count}`),
    e(
      'button',
      {
        className: 'py-2 px-4 border',
        key: 2,
        onClick: (event) => {
          console.log(setCount(count + 1));
        },
      },
      'Click me!'
    ),
  ]);
}

export default App;
