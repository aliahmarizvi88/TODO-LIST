import React from 'react';
import Index from './components/Index';
import { BrowserRouter } from 'react-router-dom';
import { ListProvider } from './context/ListContext';
import { UserProvider } from './context/userContext';

const App = () => {
  return (
    <div>
      <UserProvider>
        <ListProvider>
          <BrowserRouter>
            <Index />
          </BrowserRouter>
        </ListProvider>
      </UserProvider>
    </div>
  );
};

export default App;
