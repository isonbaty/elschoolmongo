import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import AddStudent from './pages/CreateStudent';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { deepOrange, blueGrey, yellow } from '@mui/material/colors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: blueGrey[900],
        accent: yellow[500],
      },
      secondary: {
        main: deepOrange[700],
        accent: deepOrange[400],
      },
      third: {
        main: blueGrey[100],
      },
    },
  });
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <div className='container'>
            <Header />
            <Routes>
              <Route path='/' element={<PrivateRoute />}>
                <Route path='/' element={<Home />} />
              </Route>

              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
              <Route path='/add-student' element={<PrivateRoute />}>
                <Route path='/add-student' element={<AddStudent />} />
              </Route>
            </Routes>
          </div>
        </ThemeProvider>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
