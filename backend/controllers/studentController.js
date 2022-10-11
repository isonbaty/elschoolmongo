const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
const Student = require('../models/studentModel');

//@desc   get current student
//@route  GET /api/student
//@access Private
const getStudent = asyncHandler(async (req, res) => {
  //get student from database using token from id
  const user = await User.findById(req.user._id);
  if (!user) {
    res.status(401);
    throw new Error('user not found');
  }

  const student = await Student.findOne({ user: user._id });

  res.status(200).json(student);
});

//@desc   get all students
//@route  GET /api/students
//@access Private
const getStudents = asyncHandler(async (req, res) => {
  //get all students from database using token from id
  const user = await User.find(req.user._id);
  if (!user) {
    res.status(401);
    throw new Error('user not found');
  }

  const students = await Student.find({ user: req.user.id });

  res.status(200).json(students);
});

module.exports = {
  getStudent,
  getStudents,
};
