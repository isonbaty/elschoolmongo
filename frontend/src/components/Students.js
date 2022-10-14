import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStudents, reset } from '../features/students/studentSlice';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';

import EditIcon from '@mui/icons-material/Edit';
import {
  Button,
  Box,
  Typography,
  Stack,
  Avatar,
  Container,
} from '@mui/material';

function Students() {
  const { students, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.student
  );

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  useEffect(() => {
    dispatch(getStudents());
  }, [dispatch]);

  if (isLoading) return <Loader />;

  return (
    <>
      {students ? (
        <Container maxWidth='md'>
          <Box>
            <Stack spacing={2}>
              <Stack direction='row' spacing={2}>
                {students.slice(0, 4).map((student) => (
                  <Box
                    key={student._id}
                    padding={2}
                    sx={{
                      border: '1px solid',
                      borderRadius: '5px',
                      borderColor: 'third.main',
                      minBlockSize: '100%',
                      minHeight: '100%',
                      minWidth: '200px',
                      maxWidth: '250px',
                      width: '100%',
                    }}
                  >
                    <Stack spacing='.25rem'>
                      <Box sx={{ margin: 'auto' }}>
                        <Avatar
                          sx={{ width: 50, height: 50 }}
                          alt={student.name}
                          src={student.avurl}
                        />
                      </Box>
                      <Typography variant='body2' sx={{ color: 'primary' }}>
                        {student.name}
                      </Typography>{' '}
                      <Typography
                        variant='body2'
                        sx={{ color: 'primary', fontWeight: 'bold' }}
                      ></Typography>
                      <Button
                        variant='outlined'
                        color='secondary'
                        size='small'
                        startIcon={<EditIcon />}
                        component={Link}
                        to={`/students/${student._id}`}
                      >
                        Edit profile
                      </Button>
                    </Stack>
                  </Box>
                ))}
              </Stack>
              <Stack direction='row' spacing={2}>
                {students.slice(4).map((student) => (
                  <Box
                    key={student._id}
                    padding={2}
                    sx={{
                      border: '1px solid',
                      borderRadius: '5px',
                      borderColor: 'third.main',
                      minBlockSize: '100%',
                      minHeight: '100%',
                      minWidth: '200px',
                      maxWidth: '250px',
                    }}
                  >
                    <Stack spacing='.25rem'>
                      <Box sx={{ margin: 'auto' }}>
                        <Avatar
                          sx={{ width: 50, height: 50 }}
                          alt={student.name}
                          src={student.avatar}
                        />
                      </Box>
                      <Typography variant='body2' sx={{ color: 'primary' }}>
                        {student.name}
                      </Typography>{' '}
                      <Typography
                        variant='body2'
                        sx={{ color: 'primary', fontWeight: 'bold' }}
                      ></Typography>
                      <Button
                        variant='outlined'
                        color='secondary'
                        size='small'
                        startIcon={<EditIcon />}
                        component={Link}
                        to={`/students/${student._id}`}
                      >
                        Edit profile
                      </Button>
                    </Stack>
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Box>
        </Container>
      ) : (
        <Typography variant='h4'>No Students in your record yet</Typography>
      )}
    </>
  );
}

export default Students;
