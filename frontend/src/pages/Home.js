import { Link, useNavigate } from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {
  Button,
  Box,
  Typography,
  Stack,
  Avatar,
  Container,
} from '@mui/material';
import AddCircle from '@mui/icons-material/AddCircle';
import Students from '../components/Students';

function Home() {
  return (
    <>
      <Students />

      <Button
        component={Link}
        to='/addstudent'
        variant='outlined'
        color='primary'
        startIcon={<AddCircleIcon />}
        sx={{ marginTop: '1rem' }}
      >
        Add Student
      </Button>
    </>
  );
}

export default Home;
