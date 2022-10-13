const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    parent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Parent',
      required: true,
    },
    email: {
      type: String,
    },
    name: {
      type: String,
      default: '',
    },

    student_id: {
      type: String,
      default: '',
    },
    grade: {
      type: String,
      default: '',
    },
    class_name: {
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

    blood_type: {
      type: String,
      enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
      default: 'A+',
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
    house: {
      type: String,
      enum: ['Dragon', 'Arabian Horse', 'Dolphin', 'Scorpion'],
      default: 'Dragon',
    },
    birth_date: {
      type: Date,
      default: '',
    },
    school: {
      type: String,
      default: '',
    },
    curriculum: {
      type: String,
      enum: ['British', 'Arabic', 'American'],
      default: 'British',
    },
    health_status: {
      type: String,
      enum: ['Healthy', 'Sick', 'Disabled'],
      default: 'Healthy',
    },
    class_name: {
      type: String,
      default: '',
    },
    avurl: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Student', studentSchema);
