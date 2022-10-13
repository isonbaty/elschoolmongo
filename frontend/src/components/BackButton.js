import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const BackButton = ({ url }) => {
  return (
    <Button
      variant='link'
      color='third'
      component={Link}
      to={url}
      startIcon={<ArrowBackIosIcon />}
    >
      Back
    </Button>
  );
};

export default BackButton;
