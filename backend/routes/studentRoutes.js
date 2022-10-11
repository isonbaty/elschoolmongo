const express = require('express');
const router = express.Router();
const { getStudent, getStudents } = require('../controllers/studentController');

const { protect } = require('../middleware/authMiddleware');
router.get('/:id', protect, getStudent);
router.get('/all', protect, getStudents);

module.exports = router;
