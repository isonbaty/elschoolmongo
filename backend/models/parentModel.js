const mongoose = require('mongoose');

const parentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
    },
    company: {
      type: String,

      default: '',
    },
    profession: {
      type: String,

      default: '',
    },
    salary: {
      type: String,

      default: '',
    },
    personal_id: {
      type: String,
    },
    address: {
      type: String,

      default: '',
    },
    parent_type: {
      type: String,
      enum: ['father', 'mother', 'guardian'],

      default: 'father',
    },
    phone: {
      type: String,

      default: '',
    },
    status: {
      type: String,
      enum: ['initiated', 'processing', 'approved', 'rejected'],
      default: 'initiated',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Parent', parentSchema);
