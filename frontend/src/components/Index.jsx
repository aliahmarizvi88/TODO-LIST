import React from 'react';
import Header from './Header';
import { Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import List from './List';
import Completed from './Completed';
import Deleted from './Deleted';
import Pending from './Pending';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';

const Index = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Login />} />
      <Route
        path="*"
        element={
          <>
            <Header />
            <div className="flex flex-col items-center justify-center">
              <Nav />
              <Routes>
                <Route path="/home" element={<List />} />
                <Route path="/complete" element={<Completed />} />
                <Route path="/delete" element={<Deleted />} />
                <Route path="/pending" element={<Pending />} />
              </Routes>
            </div>
          </>
        }
      />
    </Routes>
  );
};

export default Index;
