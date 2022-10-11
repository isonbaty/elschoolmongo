const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
const Parent = require('../models/parentModel');

//@desc   get current parent
//@route  GET /api/parent
//@access Private
const getParent = asyncHandler(async (req, res) => {
  //get parent from database using token from id
  const user = await User.findById(req.user._id);
  if (!user) {
    res.status(401);
    throw new Error('user not found');
  }

  const parent = await Parent.findOne({ user: user._id });

  res.status(200).json(parent);
});

//@desc   get current parent
//@route  GET /api/parents
//@access Private

module.exports = {
  getParent,
};
