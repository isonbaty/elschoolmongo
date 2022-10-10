import { FaSignInAlt, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';
import { Button, Typography } from '@mui/material';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/login');
  };
  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>ElSchool</Link>
      </div>
      <ul>
        {user ? (
          <>
            <li>
              <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>
                {user.name}
              </Typography>
            </li>
            <li>
              <Button
                variant='outlined'
                color='secondary'
                onClick={handleLogout}
              >
                logout
              </Button>
            </li>
          </>
        ) : (
          <>
            <li>
              {' '}
              <Link to='/login'>
                <FaSignInAlt />
                Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser />
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;
