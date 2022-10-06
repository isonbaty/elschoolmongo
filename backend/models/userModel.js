const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
    salary: {
      type: String,
      default: '',
    },
    personal_id: {
      type: String,
      default: '',
    },
    address: {
      type: String,
      default: '',
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    isParent: {
      type: Boolean,
      required: true,
      default: true,
    },
    isTeacher: {
      type: Boolean,
      required: true,
      default: false,
    },
    isStudent: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
