import React from 'react';
import { CircleUserRound } from 'lucide-react';

const Header = ({ username }) => {
  return (
    <div className="text-white bg-purple-700 flex justify-between py-5 px-10">
      <span className="text-xl font-bold flex items-center space-x-1">
        <CircleUserRound size={32} color="#ffffff" />
        <p>Welcome, {username}</p>
      </span>
      <h1 className="font-extrabold text-4xl">TODO LIST</h1>
    </div>
  );
};

export default Header;
