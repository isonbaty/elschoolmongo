import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/lotties/iloader.json';

function Loader() {
  return (
    <div className='loader-container'>
      <Lottie animationData={animationData} loop={true} size='50px' />
    </div>
  );
}

export default Loader;
