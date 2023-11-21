import useBackgroundImage from '../../hooks/useBackgroundImage';
import desktopImg from '../../assets/404/earth-surface-4k-space-bshep7a66431s5uk.webp';
import tabletImg from '../../assets/404/earth-surface-4k-space-bshep7a66431s5uk.webp';
import mobileImg from '../../assets/404/earth-surface-4k-space-bshep7a66431s5uk.webp';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/not-found');
  }, [navigate]);

  useBackgroundImage({ desktopImg, tabletImg, mobileImg });
  return (
    <div className='not-found'>
      <h3>OOOPS!</h3>
      <h4>THIS PAGE DOES NOT EXIST...</h4>
    </div>
  );
};

export default NotFound;
