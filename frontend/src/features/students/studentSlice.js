import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import studentService from './studentService';

const initialState = {
  students: [],
  student: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// create new student
export const createStudent = createAsyncThunk(
  'students/create',
  async (studentData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await studentService.createStudent(studentData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createStudent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createStudent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createStudent.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = studentSlice.actions;
export default studentSlice.reducer;
