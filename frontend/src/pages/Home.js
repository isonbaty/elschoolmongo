import {
  Avatar,
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from '@mui/material';
function Home() {
  return (
    <>
      <Container maxWidth='md'>
        <Box>
          <Stack spacing={2}>
            <Stack direction='row' spacing={2}>
              <Box
                padding={2}
                sx={{
                  border: '1px solid',
                  borderRadius: '5px',
                  borderColor: 'third.main',
                  minBlockSize: '100%',
                  minHeight: '100%',
                }}
              >
                <Stack spacing='.25rem'>
                  <Box sx={{ margin: 'auto' }}>
                    <Avatar
                      sx={{ width: 75, height: 75 }}
                      src='https://images.unsplash.com/photo-1628890920690-9e29d0019b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'
                    />
                  </Box>
                  <Typography variant='subtitle2' sx={{ color: 'primary' }}>
                    Adam Moustafa Aly Elsonbaty
                  </Typography>{' '}
                  <Typography variant='caption' sx={{ color: 'primary' }}>
                    Gems Westminister School
                  </Typography>
                  <Typography
                    variant='body2'
                    sx={{ color: 'primary', fontWeight: 'bold' }}
                  >
                    Grade: Y6/G5
                  </Typography>
                  <Typography
                    variant='body2'
                    sx={{ color: 'primary', fontWeight: 'bold' }}
                  >
                    Student ID: 12345678912345
                  </Typography>
                  <Typography></Typography>
                  <Button variant='outlined' color='secondary'>
                    Complete Student Profile
                  </Button>
                </Stack>
              </Box>

              <Box
                padding={2}
                sx={{
                  border: '1px solid',
                  borderRadius: '5px',
                  borderColor: 'third.main',
                  minBlockSize: '100%',
                  minHeight: '100%',
                }}
              >
                <Stack spacing='.25rem'>
                  <Box sx={{ margin: 'auto' }}>
                    <Avatar
                      sx={{ width: 75, height: 75 }}
                      src='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1522&q=80'
                    />
                  </Box>
                  <Typography variant='subtitle2' sx={{ color: 'primary' }}>
                    Adam Moustafa Aly Elsonbaty
                  </Typography>{' '}
                  <Typography variant='caption' sx={{ color: 'primary' }}>
                    Gems Westminister School
                  </Typography>
                  <Typography
                    variant='body2'
                    sx={{ color: 'primary', fontWeight: 'bold' }}
                  >
                    Grade: Y6/G5
                  </Typography>
                  <Typography
                    variant='body2'
                    sx={{ color: 'primary', fontWeight: 'bold' }}
                  >
                    Student ID: 12345678912345
                  </Typography>
                  <Typography></Typography>
                  <Button variant='outlined' color='secondary'>
                    Complete Student Profile
                  </Button>
                </Stack>
              </Box>

              <Box
                padding={2}
                sx={{
                  border: '1px solid',
                  borderRadius: '5px',
                  borderColor: 'third.main',
                  minBlockSize: '100%',
                  minHeight: '100%',
                }}
              >
                <Stack spacing='.25rem'>
                  <Box sx={{ margin: 'auto' }}>
                    <Avatar
                      sx={{ width: 75, height: 75 }}
                      src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80'
                    />
                  </Box>
                  <Typography variant='subtitle2' sx={{ color: 'primary' }}>
                    Adam Moustafa Aly Elsonbaty
                  </Typography>{' '}
                  <Typography variant='caption' sx={{ color: 'primary' }}>
                    Gems Westminister School
                  </Typography>
                  <Typography
                    variant='body2'
                    sx={{ color: 'primary', fontWeight: 'bold' }}
                  >
                    Grade: Y6/G5
                  </Typography>
                  <Typography
                    variant='body2'
                    sx={{ color: 'primary', fontWeight: 'bold' }}
                  >
                    Student ID: 12345678912345
                  </Typography>
                  <Typography></Typography>
                  <Button variant='outlined' color='secondary'>
                    Complete Student Profile
                  </Button>
                </Stack>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </>
  );
}

export default Home;
