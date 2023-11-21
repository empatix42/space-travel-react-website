import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { replaceSpaces } from '../../utils/helpers';
import { useMediaQuery } from 'react-responsive';
import useFetch from '../../hooks/useFetch';
import useBackgroundImage from '../../hooks/useBackgroundImage';
import desktopImg from '../../assets/technology/background-technology-desktop.jpg';
import tabletImg from '../../assets/technology/background-technology-tablet.jpg';
import mobileImg from '../../assets/technology/background-technology-mobile.jpg';
import Heading from '../../components/Heading';
import './Technology.css';

const Technology = () => {
  const link = 'http://localhost:8000/technology';
  const { tech } = useParams();
  const navigate = useNavigate();
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const [techData, setTechData] = useState(null);
  const [currentTech, setCurrentTech] = useState(null);

  useBackgroundImage({ desktopImg, tabletImg, mobileImg });
  useFetch(link, setTechData, techData);

  useEffect(() => {
    if (!tech && techData) {
      navigate(`/technology/${replaceSpaces(techData[0].name, '_')}`);
    }
  }, [navigate, tech, techData]);

  useEffect(() => {
    if (tech && techData) {
      const current = techData.find((t) => replaceSpaces(t.name, '_') === tech);

      if (!current) {
        navigate('/not-found');
      }

      setCurrentTech(current);
    }
  }, [navigate, tech, techData]);

  return (
    <main className='page-container'>
      <Heading number={'03'} text='SPACE LAUNCH 101' />
      {currentTech && (
        <div className='tech-content'>
          {!isDesktop && currentTech && (
            <div className='tech-image'>
              <img
                key={currentTech?.name}
                src={require(`../../assets/technology/image-${replaceSpaces(
                  currentTech.name,
                  '-'
                )}-landscape.jpg`)}
                alt='crew member'
              />
            </div>
          )}
          <nav className='tech-navbar'>
            <ul>
              {techData.map((tech, index) => (
                <li>
                  <NavLink to={`/technology/${replaceSpaces(tech.name, '_')}`}>
                    <span className='sub-h1'>{index + 1}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className='tech-details'>
            <h4 className='sub-h2'>THE TERMINOLOGY...</h4>
            <h3>{currentTech.name.toUpperCase()}</h3>
            <p>{currentTech.description}</p>
          </div>
          {isDesktop && (
            <div className='tech-image'>
              <img
                key={currentTech?.name}
                src={require(`../../assets/technology/image-${replaceSpaces(
                  currentTech.name,
                  '-'
                )}-portrait.jpg`)}
                alt='crew member'
              />
            </div>
          )}
        </div>
      )}
    </main>
  );
};

export default Technology;
