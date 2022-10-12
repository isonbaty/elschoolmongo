const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
const Student = require('../models/studentModel');

//@desc   get current student
//@route  GET /api/student/:id
//@access Private
const getStudent = asyncHandler(async (req, res) => {
  //get student from database using token from id
  const user = await User.findById(req.user._id);
  if (!user) {
    res.status(401);
    throw new Error('Student not found');
  }

  const student = await Student.findById(req.params.id);

  if (!student) {
    res.status(401);
    throw new Error('Student not found');
  }

  if (student.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('Not authorized');
  }

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

//@desc   DELETE current student
//@route  DELETE /api/student/:id
//@access Private
const deleteStudent = asyncHandler(async (req, res) => {
  //get student from database using token from id
  const user = await User.findById(req.user._id);
  if (!user) {
    res.status(401);
    throw new Error('user not found');
  }

  const student = await Student.findById(req.params.id);

  if (!student) {
    res.status(404);
    throw new Error('Student not found');
  }
  if (student.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('Not authorized');
  }
  await student.remove();

  res.status(200).json({ message: 'Student removed' });
});

//@desc   update current student
//@route  Put /api/student/:id
//@access Private
const updateStudent = asyncHandler(async (req, res) => {
  //get student from database using token from id
  const user = await User.findById(req.user._id);
  if (!user) {
    res.status(401);
    throw new Error('Student not found');
  }

  const student = await Student.findById(req.params.id);

  if (!student) {
    res.status(404);
    throw new Error('Student not found');
  }

  if (student.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('Not authorized');
  }
  const updatedStudent = await Student.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedStudent);
});

//@desc   create a student
//@route  POST /api/students
//@access Private
const createStudent = asyncHandler(async (req, res) => {
  //get student from database using token from id
  const {
    name,
    grade,
    class_name,
    personal_id,
    address,
    blood_type,
    phone,
    status,
    house,
    birth_date,
    school,
    curriculum,
    health_status,
  } = req.body;

  if (!name) {
    res.status(400);
    throw new Error('Please fill in the name');
  }
  const studentExists = await Student.findOne({ name, personal_id });
  if (studentExists) {
    res.status(400);
    throw new Error('Student already exists');
  }

  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error('user not found');
  }
  const student = await Student.create({
    name,
    grade,
    class_name,
    personal_id,
    address,
    blood_type,
    phone,
    status,
    house,
    birth_date,
    school,
    curriculum,
    health_status,
    user: req.user.id,
    parent: req.user.id,
    student_id: '000000' + Math.floor(Math.random() * 1000000),
  });

  res.status(200).json(student);
});

module.exports = {
  getStudent,
  getStudents,
  deleteStudent,
  updateStudent,
  createStudent,
};
