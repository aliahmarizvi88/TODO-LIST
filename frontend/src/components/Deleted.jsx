import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { useList } from '../context/ListContext';
import Search from '../components/Search';

const Deleted = () => {
  const { tasks, updateTask, deleteAllTask } = useList();
  const [showDialog, setShowDialog] = useState(false);
  const [search, setSearch] = useState('');

  const deletedTasks = tasks.filter((item) => item.status === 'Deleted');

  const handleRestore = (item) => {
    updateTask(item._id, { status: 'Pending' });
  };

  const handleDeleteAll = async () => {
    await deleteAllTask();
    setShowDialog(false);
  };

  return (
    <div className="w-4xl mx-auto mt-12 p-8 bg-white rounded-xl shadow-lg">
      <h1 className="text-center text-3xl font-extrabold text-purple-700 mb-8 tracking-wide">
        Deleted Tasks
      </h1>
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
        <Search
          value={search}
          onChange={setSearch}
          placeholder="Search deleted tasks..."
        />
        <button
          className="flex gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition"
          onClick={() => setShowDialog(true)}
        >
          DELETE ALL
        </button>
      </div>
      {showDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-sm">
            <h2 className="text-xl font-bold text-purple-700 mb-4">
              Confirm Delete
            </h2>
            <p className="mb-6 text-gray-700">
              Are you sure you want to permanently delete all deleted tasks?
            </p>
            <div className="flex justify-end gap-4">
              <button
                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-gray-700 transition"
                onClick={() => setShowDialog(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 rounded bg-red-600 hover:bg-red-700 text-white font-semibold transition"
                onClick={handleDeleteAll}
              >
                Delete All
              </button>
            </div>
          </div>
        </div>
      )}
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
