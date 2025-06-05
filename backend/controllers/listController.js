const List = require('../models/list');

const handleAddItem = async (req, res) => {
  try {
    const { task, date, priority, status } = req.body;

    const newTask = await List.create({ task, date, priority, status });

    return res.status(200).json(newTask);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: `Internal Server Error, ${error}` });
  }
};
const handleDeleteItem = async (req, res) => {
  try {
    const { task, date, priority } = req.body;

    const itemDeleted = await List.findOneAndDelete({
      task,
      date,
      priority,
    });

    if (!itemDeleted) return res.status(404).json({ error: 'Task not found' });

    return res.status(200).json({ message: 'Task deleted Sucessfully' });
  } catch (error) {
    return res.status(500).json({ message: `Internal Server Error ${error}` });
  }
};

const handleUpdateItem = async (req, res) => {
  try {
    const { id, ...newData } = req.body;

    const updateItem = await List.findByIdAndUpdate(
      id,
      { $set: newData },
      { new: true }
    );

    if (!updateItem) return res.status(404).json({ error: 'Task not found' });

    return res.status(200).json(updateItem);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: `Internal Server Error ${error} ` });
  }
};

const displayData = async (req, res) => {
  try {
    const allTasks = await List.find({});
    return res.json(allTasks);
  } catch (error) {
    return res.status(500).json({ error: `FAILED TO FETCH DATA ${error}` });
  }
};
module.exports = {
  handleAddItem,
  handleDeleteItem,
  handleUpdateItem,
  displayData,
};
