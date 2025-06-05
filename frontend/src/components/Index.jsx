import React from 'react';
import Header from './Header';
import { Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import List from './List';
import Completed from './Completed';
import Deleted from './Deleted';
import Pending from './Pending';

const Index = () => {
  return (
    <div>
      <Header username={'Ali Ahmad'} />
      <div className="flex flex-col items-center justify-center">
        <Nav />
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/complete" element={<Completed />} />
          <Route path="/delete" element={<Deleted />} />
          <Route path="/pending" element={<Pending />} />
        </Routes>
      </div>
    </div>
  );
};

export default Index;
