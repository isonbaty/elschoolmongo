const express = require('express');
const router = express.Router();
const { getParent, updateParent } = require('../controllers/parentController');

const { protect } = require('../middleware/authMiddleware');
router.get('/:id', protect, getParent);
router.put('/:id', protect, updateParent);

module.exports = router;
