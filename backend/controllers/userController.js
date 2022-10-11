const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/userModel');
const Parent = require('../models/parentModel');
const Student = require('../models/studentModel');

//@desc   Register a new user
//@route  POST /api/users
//@access Public

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  //validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please fill in all fields');
  }

  //check if user already exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  //Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  // create Parent
  const parent = await Parent.create({
    _id: user._id,
    user: user._id,
    name: user.name,
    email: user.email,
    company: '',
    profession: '',
    salary: user.salary,
    personal_id: user.personal_id,
    address: '',
    parent_type: 'father',
    phone: '',
    status: 'initiated',
  });

  //create student
  const student = await Student.create({
    _id: user._id,
    user: user._id,
    parent: parent._id,
    name: '',
    student_id: '000000' + Math.floor(Math.random() * 1000000),
    grade: '',
    class_name: '',
    personal_id: '',
    address: parent.address,
    blood_type: 'A+',
    phone: parent.phone,
    status: 'initiated',
    house: 'Dragon',
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      isParent: user.isParent,
      isTeacher: user.isTeacher,
      isStudent: user.isStudent,
      salary: user.salary,
      personal_id: user.personal_id,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

//@desc   Register a new user
//@route  POST /api/users/login
//@access Public

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  //find the user
  const user = await User.findOne({ email });
  //check user and password match
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      isParent: user.isParent,
      isTeacher: user.isTeacher,
      isStudent: user.isStudent,
      salary: user.salary,
      personal_id: user.personal_id,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid Credentials');
  }
});

//@desc   get current user
//@route  GET /api/users/me
//@access Private
const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

// Generate token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
