import axios from 'axios';
const API_URL = '/api/students';

// create new student

const createStudent = async (studentData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, studentData, config);
  return response.data;
};

// get user's students

const getStudents = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);
  return response.data;
};

const studentService = {
  createStudent,
  getStudents,
};

export default studentService;
