import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Container,
  Box,
  FormHelperText,
  InputAdornment,
  TextField,
} from '@mui/material';
import { toast } from 'react-toastify';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = () => {
    if (!name || !email || !password || !password2) {
      toast.error('Please fill all fields');
    }
    if (password !== password2) {
      toast.error('Passwords do not match');
    }
  };

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>
      <section className='form'>
        <Container maxWidth='sm'>
          <Box component='form' noValidate>
            <Stack spacing={2}>
              <TextField
                required
                id='name'
                label='Name'
                name='name'
                value={name}
                placeholder='Enter your name'
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

              <TextField
                required
                color='secondary'
                type='password'
                id='password2'
                name='password2'
                value={password2}
                label='Confirm Password'
                onChange={onChange}
                placeholder='Confirm Password'
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

export default Register;
