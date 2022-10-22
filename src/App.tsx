import React from 'react';
import { Home } from './pages';
import { injectGlobal } from '@emotion/css';
import { globalStyle } from './globalStyle';

function App() {
  injectGlobal`${globalStyle}`;

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
