import React from 'react';
import Index from './components/Index';
import { BrowserRouter } from 'react-router-dom';
import { ListProvider } from './context/ListContext';

const App = () => {
  return (
    <div>
      <ListProvider>
        <BrowserRouter>
          <Index />
        </BrowserRouter>
      </ListProvider>
    </div>
  );
};

export default App;
