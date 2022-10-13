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

const ticketService = {
  createStudent,
};

export default ticketService;
