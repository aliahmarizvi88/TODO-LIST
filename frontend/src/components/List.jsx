import React, { useState } from 'react';
import AddTask from './AddTask';
import UpdateTask from './UpdateTask';
import { Plus, Trash2, Pencil } from 'lucide-react';
import { useList } from '../context/ListContext';
import Search from './Search';

const List = () => {
  const [dailogueOpen, setDailogueOpen] = useState(false);
  const [updateOpen, setUpdateOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [search, setSearch] = useState('');
  const { tasks, handleDelete, handleStatusChange } = useList();

  const visibleTasks = tasks.filter(
    (item) =>
      item.status !== 'Deleted' &&
      item.task.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-4xl mx-auto mt-12 p-8 bg-white rounded-xl shadow-lg">
      <h1 className="text-center text-3xl font-extrabold text-purple-700 mb-8 tracking-wide">
        My Tasks
      </h1>
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
        <Search
          value={search}
          onChange={setSearch}
          placeholder="Search tasks..."
        />
        <button
          className="flex gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition"
          onClick={() => setDailogueOpen(true)}
        >
          <Plus size={24} />
          Add Task
        </button>
      </div>
      <AddTask open={dailogueOpen} onClose={() => setDailogueOpen(false)} />
      <UpdateTask
        open={updateOpen}
        onClose={() => setUpdateOpen(false)}
        taskData={selectedTask}
      />
      <div className="overflow-x-auto">
        <table className="min-w-full text-purple-700">
          <thead>
            <tr className="bg-purple-100">
              <th className="px-6 py-3 text-left font-semibold">Action</th>
              <th className="px-6 py-3 text-left font-semibold">Task</th>
              <th className="px-6 py-3 text-left font-semibold">Date</th>
              <th className="px-6 py-3 text-left font-semibold">Priority</th>
              <th className="px-6 py-3 text-left font-semibold">Status</th>
              <th className="px-6 py-3 text-left font-semibold">
                Delete / Update
              </th>
            </tr>
          </thead>
          <tbody>
            {visibleTasks.map((item, idx) => (
              <tr
                className="hover:bg-purple-50 transition duration-300"
                key={item._id || idx}
              >
                <td className="px-6 py-4">
                  <input
                    type="checkbox"
                    checked={item.status === 'Complete'}
                    onChange={() => handleStatusChange(item)}
                    className="h-5 w-5 accent-purple-600 rounded border-2 border-purple-400 focus:ring-2 focus:ring-purple-500 transition-all duration-200 shadow-sm"
                    style={{
                      boxShadow:
                        item.status === 'Complete'
                          ? '0 0 0 2px #a78bfa'
                          : '0 0 0 1px #ddd',
                    }}
                  />
                </td>
                <td
                  className={`px-6 py-4 ${
                    item.status === 'Complete' ? 'line-through' : ''
                  }`}
                >
                  {item.task}
                </td>
                <td
                  className={`px-6 py-4 ${
                    item.status === 'Complete' ? 'line-through' : ''
                  }`}
                >
                  {item.date
                    ? new Date(item.date).toLocaleDateString('en-Us', {
                        year: 'numeric',
                        month: 'numeric',
                        day: 'numeric',
                      })
                    : ''}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                      item.priority === 'High'
                        ? 'bg-red-100 text-red-700 border border-red-300'
                        : item.priority === 'Medium'
                        ? 'bg-orange-100 text-orange-700 border border-orange-300'
                        : 'bg-green-100 text-green-700 border border-green-300'
                    }`}
                  >
                    {item.priority}
                  </span>
                </td>
                <td className="px-6 py-4 space-x-2">
                  <span
                    className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                      item.status === 'Complete'
                        ? ' text-purple-700'
                        : ' text-yellow-700'
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 space-x-2">
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg transition"
                    onClick={() => {
                      setSelectedTask(item);
                      setUpdateOpen(true);
                    }}
                  >
                    <Pencil size={16} />
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition"
                    onClick={() => handleDelete(item)}
                  >
                    <Trash2 size={16} />
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

export default List;
