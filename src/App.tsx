import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GloblStyle from './styles/global';
import Routes from './routes';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GloblStyle />
  </>
);

export default App;
