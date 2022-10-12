import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, reset } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

import {
  Button,
  Stack,
  Container,
  Box,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { toast } from 'react-toastify';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import Lottie from 'lottie-react';
import animationData from '../assets/lotties/76212-student-transparent.json';
import Loader from '../components/Loader';
function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, isSuccess, message, isError } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    //redirect if success
    if (isSuccess || user) {
      navigate('/');
    }
    dispatch(reset());
  }, [user, isSuccess, message, isError, dispatch, navigate]);
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = () => {
    if (!email || !password) {
      toast.error('Please fill all fields');
    } else {
      const userData = {
        email,
        password,
      };
      dispatch(login(userData));
    }
  };

  if (isLoading) return <Loader />;

  return (
    <>
      <Container maxWidth='2xl'>
        <Stack
          direction='row'
          justifyContent='center'
          alignItems='center'
          spacing={2}
        >
          <Box>
            <Lottie animationData={animationData} loop={true} />
          </Box>
          <Box noValidate>
            <Stack justifyContent='center' alignItems='center' spacing={2}>
              <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                Sign in
              </Typography>
              <TextField
                required
                label='Email'
                color='secondary'
                type='email'
                id='email'
                name='email'
                value={email}
                onChange={onChange}
                placeholder='Enter your Email'
                sx={{ width: '150%' }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <EmailIcon color='third' />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                required
                label='Password'
                color='secondary'
                type='password'
                id='password'
                name='password'
                value={password}
                onChange={onChange}
                placeholder='Enter Password'
                sx={{ width: '150%' }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <LockIcon color='third' />
                    </InputAdornment>
                  ),
                }}
              />

              {/* <FormControl>
                <FormLabel id='usertype'>I'm</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby='usertype'
                  defaultValue='female'
                  name='radio-buttons-group'
                >
                  <FormControlLabel
                    value='student'
                    control={<Radio />}
                    label='Student'
                  />
                  <FormControlLabel
                    value='parent'
                    control={<Radio />}
                    label='Parent'
                  />
                  <FormControlLabel
                    value='teacher'
                    control={<Radio />}
                    label='Teacher'
                  />
                </RadioGroup>
              </FormControl> */}

              <Button
                variant='contained'
                color='secondary'
                onClick={onSubmit}
                sx={{ width: '150%' }}
              >
                Submit
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </>
  );
}

export default Login;
