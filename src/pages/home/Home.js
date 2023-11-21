import useBackgroundImage from '../../hooks/useBackgroundImage';
import desktopImg from '../../assets/home/background-home-desktop.jpg';
import tabletImg from '../../assets/home/background-home-tablet.jpg';
import mobileImg from '../../assets/home/background-home-mobile.jpg';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  useBackgroundImage({ desktopImg, tabletImg, mobileImg });

  const handleClick = () => {
    navigate('/destination');
  };

  return (
    <main className='home-container'>
      <div className='text-content'>
        <h5>SO, YOU WANT TO TRAVEL TO</h5>
        <h1>SPACE</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space
          and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a
          truly out of this world experience!
        </p>
      </div>
      <button onClick={handleClick} className='home-btn'>
        <span className='sub-h1'>EXPLORE</span>
      </button>
    </main>
  );
};

export default Home;
