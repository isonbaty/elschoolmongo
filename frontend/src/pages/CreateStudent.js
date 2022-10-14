import { useState, useEffect } from 'react';
import {
  Button,
  Stack,
  Container,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';

import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createStudent, reset } from '../features/students/studentSlice';
import BackButton from '../components/BackButton';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import BadgeIcon from '@mui/icons-material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Loader from '../components/Loader';

function CreateStudent() {
  const { user } = useSelector((state) => state.auth);
  const { isSuccess, isError, message, isLoading, isCompleted } = useSelector(
    (state) => state.student
  );

  const [formData, setFormData] = useState({
    name: '',
    personal_id: '',
    birth_date: '',
  });

  const { name, personal_id, birth_date } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isCompleted) {
      dispatch(reset());
      navigate('/');
    }
  }, [isCompleted, isError, dispatch, message, navigate]);
  const onSubmit = (e) => {
    if (!name || !personal_id || !birth_date) {
      toast.error('Please fill all fields');
    } else {
      dispatch(createStudent({ name, personal_id, birth_date }));
      toast.success('Student created');
    }
  };

  if (isLoading) return <Loader />;
  return (
    <div>
      <Container maxWidth='sm'>
        <Stack spacing={2}>
          <Typography variant='h6'>Add Student</Typography>
          <TextField
            required
            id='parent'
            label='Parent Name'
            name='parent'
            value={user.name}
            onChange={onChange}
            color='secondary'
            disabled
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <PersonIcon color='third' />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            required
            id='email'
            label='Parent Email'
            name='email'
            value={user.email}
            onChange={onChange}
            color='secondary'
            disabled
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <MailIcon color='third' />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            required
            id='name'
            label='Student Name'
            name='name'
            placeholder='Enter Student Name'
            onChange={onChange}
            color='secondary'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <PersonIcon color='third' />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            required
            id='personal_id'
            label='Personal ID'
            name='personal_id'
            placeholder='Enter Student Personal ID Number'
            onChange={onChange}
            color='secondary'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <BadgeIcon color='third' />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            required
            type='date'
            id='birth_date'
            label='Birth Date'
            name='birth_date'
            placeholder='Enter Student Birth Date'
            onChange={onChange}
            color='secondary'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <CalendarMonthIcon color='third' />
                </InputAdornment>
              ),
            }}
          />
          <Button variant='contained' color='secondary' onClick={onSubmit}>
            Submit
          </Button>
          <BackButton url={'/'} />
        </Stack>
      </Container>
    </div>
  );
}

export default CreateStudent;
