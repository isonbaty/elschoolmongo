import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  updateStudent,
  reset,
  getStudent,
} from '../features/students/studentSlice';

import {
  Button,
  Stack,
  Container,
  InputAdornment,
  TextField,
  Typography,
  Box,
  Avatar,
} from '@mui/material';
import { toast } from 'react-toastify';
import BackButton from '../components/BackButton';
import Loader from '../components/Loader';

function UpdateStudent() {
  const [formData, setFormData] = useState({
    name: '',
    personal_id: '',
    birth_date: '',
  });

  const { name, personal_id, birth_date } = formData;

  const { user } = useSelector((state) => state.auth);
  const { isSuccess, isError, message, isLoading, student } = useSelector(
    (state) => state.student
  );
  const dispatch = useDispatch();
  const { id } = useParams();

  const onChange = (e) => {};

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(getStudent(id));
  }, [id, dispatch]);
  return (
    <div>
      <Container maxWidth='md'>
        <Stack spacing={2}>
          <Box
            sx={{
              border: '1px solid',
              borderRadius: '5px',
              borderColor: 'third.main',
              minBlockSize: '100%',
              minHeight: '100%',
              minWidth: '200px',
              padding: '1rem',
            }}
          >
            <Stack
              direction='column'
              spacing={2}
              sx={{
                alignItems: 'center',
                padding: '4rem',
              }}
            >
              <Avatar src={student?.avurl} sx={{ width: 100, height: 100 }} />
              <TextField
                label='Name'
                id='name'
                value={student.name}
                name='name'
                variant='outlined'
                fullWidth
                disabled
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                label='Personal ID'
                id='student_id'
                value={student.student_id}
                name='student_id'
                fullWidth
                disabled
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                label='Birth Date'
                id='birth_date'
                value={student.birth_date}
                name='birth_date'
                fullWidth
                disabled
                InputLabelProps={{ shrink: true }}
              />
            </Stack>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}

export default UpdateStudent;
