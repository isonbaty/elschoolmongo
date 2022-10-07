import { useState } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import {
  Button,
  Stack,
  Container,
  Box,
  InputAdornment,
  TextField,
} from '@mui/material';
import { toast } from 'react-toastify';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = () => {
    if (!email || !password) {
      toast.error('Please fill all fields');
    }
  };

  return (
    <>
      <section className='heading'>
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Please create an account</p>
      </section>
      <section className='form'>
        <Container maxWidth='sm'>
          <Box component='form' noValidate>
            <Stack spacing={2}>
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
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <LockIcon color='third' />
                    </InputAdornment>
                  ),
                }}
              />

              <Button variant='contained' color='secondary' onClick={onSubmit}>
                Submit
              </Button>
            </Stack>
          </Box>
        </Container>
      </section>
    </>
  );
}

export default Login;
