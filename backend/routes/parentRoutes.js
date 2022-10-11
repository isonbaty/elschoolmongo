const express = require('express');
const router = express.Router();
const { getParent } = require('../controllers/parentController');

const { protect } = require('../middleware/authMiddleware');
router.get('/', protect, getParent);

module.exports = router;
