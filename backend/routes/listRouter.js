const express = require('express');
const {
  handleAddItem,
  handleDeleteItem,
  handleUpdateItem,
  displayData,
} = require('../controllers/listController');

const router = express.Router();

router.post('/addTask', handleAddItem);
router.delete('/deleteTask', handleDeleteItem);
router.patch('/updateTask', handleUpdateItem);
router.get('/displayTask', displayData);

module.exports = router;
