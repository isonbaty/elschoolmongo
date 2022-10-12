const express = require('express');
const router = express.Router();
const {
  getStudent,
  getStudents,
  deleteStudent,
  updateStudent,
  createStudent,
} = require('../controllers/studentController');

const { protect } = require('../middleware/authMiddleware');
router.get('/:id', protect, getStudent);
router.get('/all', protect, getStudents);
router.delete('/:id', protect, deleteStudent);
router.put('/:id', protect, updateStudent);
router.post('/', protect, createStudent);

module.exports = router;
