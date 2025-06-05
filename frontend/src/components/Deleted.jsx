import React from 'react';
import { RotateCcw } from 'lucide-react';
import { useList } from '../context/ListContext';

const Deleted = () => {
  const { tasks, updateTask } = useList();

  const deletedTasks = tasks.filter((item) => item.status === 'Deleted');

  const handleRestore = (item) => {
    updateTask(item._id, { status: 'Pending' });
  };

  return (
    <div className="w-4xl mx-auto mt-12 p-8 bg-white rounded-xl shadow-lg">
      <h1 className="text-center text-3xl font-extrabold text-purple-700 mb-8 tracking-wide">
        Deleted Tasks
      </h1>
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
        <input
          type="search"
          placeholder="Search tasks..."
          className="flex-1 px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
        />
        <button className="flex gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition">
          DELETE ALL
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-purple-700">
          <thead>
            <tr className="bg-purple-100">
              <th className="px-6 py-3 text-left font-semibold">Action</th>
              <th className="px-6 py-3 text-left font-semibold">Task</th>
              <th className="px-6 py-3 text-left font-semibold">Date</th>
              <th className="px-6 py-3 text-left font-semibold">Priority</th>
              <th className="px-6 py-3 text-left font-semibold">Status</th>
              <th className="px-6 py-3 text-left font-semibold">Restore</th>
            </tr>
          </thead>
          <tbody>
            {deletedTasks.map((item, idx) => (
              <tr
                className="hover:bg-purple-50 transition duration-300 text-gray-400"
                key={item._id || idx}
              >
                <td className="px-6 py-4">
                  <input type="checkbox" disabled />
                </td>
                <td className="px-6 py-4">{item.task}</td>
                <td className="px-6 py-4">
                  {item.date
                    ? new Date(item.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })
                    : ''}
                </td>
                <td className="px-6 py-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-700 border border-gray-300">
                    {item.priority}
                  </span>
                </td>
                <td className="px-6 py-4 space-x-2">Deleted</td>
                <td className="px-6 py-4 space-x-2">
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 transition rounded-lg"
                    onClick={() => handleRestore(item)}
                  >
                    <RotateCcw size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Deleted;
