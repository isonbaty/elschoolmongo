const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
const Parent = require('../models/parentModel');

//@desc   get current parent
//@route  GET /api/parent/:id
//@access Private
const getParent = asyncHandler(async (req, res) => {
  //get parent from database using token from id
  const user = await User.findById(req.user._id);
  if (!user) {
    res.status(401);
    throw new Error('user not found');
  }

  const parent = await Parent.findById(req.params.id);

  if (!parent) {
    res.status(401);
    throw new Error('Parent not found');
  }

  if (parent.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('Not authorized');
  }

  res.status(200).json(parent);
});

//@desc   update current parent
//@route  PUT /api/parent/:id
//@access Private
const updateParent = asyncHandler(async (req, res) => {
  //get parent from database using token from id
  const user = await User.findById(req.user._id);
  if (!user) {
    res.status(401);
    throw new Error('user not found');
  }

  const parent = await Parent.findById(req.params.id);

  if (!parent) {
    res.status(401);
    throw new Error('Parent not found');
  }

  if (parent.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('Not authorized');
  }

  const updatedParent = await Parent.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedParent);
});

module.exports = {
  getParent,
  updateParent,
};
