import React, { createContext, useContext, useState, useEffect } from 'react';
import axiosInstance from '../api/AxiosInstance';

const ListContext = createContext();

export const ListProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await axiosInstance.get('/displayTask');
      setTasks(res.data);
    } catch (error) {
      console.log('Error fetching Task: ', error);
    }
  };

  const addTask = async (taskData) => {
    try {
      const res = await axiosInstance.post('/addTask', taskData);
      setTasks((prev) => [...prev, res.data]);
    } catch (error) {
      console.log('Error adding task:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const updateTask = async (id, updatedData) => {
    try {
      const res = await axiosInstance.patch('/updateTask', {
        id,
        ...updatedData,
      });
      setTasks((prev) =>
        prev.map((task) => (task._id === id ? res.data : task))
      );
    } catch (error) {
      console.log('Error updating task:', error);
    }
  };

  const deleteAllTask = async () => {
    try {
      await axiosInstance.delete('/deleteTask');
      fetchTasks();
    } catch (error) {
      console.log('Error deleting tasks', error);
    }
  };

  const handleDelete = (item) => {
    updateTask(item._id, { status: 'Deleted' });
  };

  const handleStatusChange = (item) => {
    const newStatus = item.status === 'Complete' ? 'Pending' : 'Complete';
    updateTask(item._id, { status: newStatus });
  };

  return (
    <ListContext.Provider
      value={{
        tasks,
        fetchTasks,
        addTask,
        updateTask,
        handleDelete,
        handleStatusChange,
        deleteAllTask,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

export const useList = () => useContext(ListContext);
