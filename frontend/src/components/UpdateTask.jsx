import React, { useState, useEffect } from 'react';
import { useList } from '../context/ListContext';

const UpdateTask = ({ open, onClose, taskData }) => {
  const { updateTask } = useList();
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  const [priority, setPriority] = useState('');

  useEffect(() => {
    if (taskData) {
      setTask(taskData.task || '');
      setDate(taskData.date ? taskData.date.slice(0, 10) : '');
      setPriority(taskData.priority || '');
    }
  }, [taskData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateTask(taskData._id, {
      task,
      date,
      priority,
    });
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative">
        <button
          className="absolute top-3 right-3 text-purple-500 hover:text-purple-700 text-2xl font-bold"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">
          Update Task
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-purple-700 font-semibold mb-1">
              Task Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter task name"
              required
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-purple-700 font-semibold mb-1">
              Date
            </label>
            <input
              type="date"
              className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-purple-700 font-semibold mb-1">
              Priority
            </label>
            <select
              className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="">Select priority</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              className="px-4 py-2 rounded-lg bg-gray-200 text-purple-700 font-semibold hover:bg-gray-300 transition"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition"
            >
              Update Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTask;
