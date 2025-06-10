import React from 'react';
import { CircleUserRound, LogOut, LogIn } from 'lucide-react';
import { useUser } from '../context/userContext';
import { useNavigate } from 'react-router-dom';

const Header = ({ username }) => {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };
  return (
    <div className="text-white bg-purple-700 flex justify-between py-5 px-10">
      <span className="text-xl font-bold flex items-center space-x-2">
        <CircleUserRound size={32} color="#ffffff" />
        <p>Welcome, {username || user?.username || 'Guest'}</p>
        <button
          onClick={handleLogout}
          title="Logout"
          className="bg-white p-2 rounded-3xl hover:scale-110 duration-300 "
        >
          <LogOut size={24} color="#8E24AA" />
        </button>
      </span>
      <h1 className="font-extrabold text-4xl">TODO LIST</h1>
    </div>
  );
};

export default Header;
