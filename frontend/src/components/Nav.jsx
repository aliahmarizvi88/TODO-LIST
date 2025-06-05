import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListCheck, Clock2, Trash2 } from 'lucide-react';
const Nav = () => {
  return (
    <nav className="bg-purple-100 mt-10 flex gap-10 w-4xl justify-between rounded-lg text-purple-700 font-bold">
      <Link
        className="flex flex-col items-center bg-white m-6 p-8 rounded-2xl w-2xl hover:scale-105 duration-150"
        to={'/'}
      >
        <List size={48} color="#7B1FA2" />
        TOTAL
      </Link>
      <Link
        className="flex flex-col items-center bg-white m-6 p-8 rounded-2xl w-2xl hover:scale-105 duration-150"
        to="/complete"
      >
        <ListCheck size={48} color="#7B1FA2" />
        COMPETED
      </Link>
      <Link
        className="flex flex-col items-center bg-white m-6 p-8 rounded-2xl w-2xl hover:scale-105 duration-150"
        to="/pending"
      >
        <Clock2 size={48} color="#7B1FA2" />
        PENDING
      </Link>
      <Link
        className="flex flex-col items-center bg-white m-6 p-8 rounded-2xl w-2xl hover:scale-105 duration-150"
        to="/delete"
      >
        <Trash2 size={48} color="#7B1FA2" />
        DELETED
      </Link>
    </nav>
  );
};

export default Nav;
