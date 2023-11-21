import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import useBackgroundImage from '../../hooks/useBackgroundImage';
import desktopImg from '../../assets/destination/background-destination-desktop.jpg';
import tabletImg from '../../assets/destination/background-destination-tablet.jpg';
import mobileImg from '../../assets/destination/background-destination-mobile.jpg';
import Heading from '../../components/Heading';
import useFetch from '../../hooks/useFetch';
import './Destination.css';

const Destination = () => {
  const link = 'http://localhost:8000/destinations';
  const { planet } = useParams();
  const navigate = useNavigate();

  const [planetsData, setPlanetsData] = useState(null);
  const [currentPlanet, setCurrentPlanet] = useState(null);

  useBackgroundImage({ desktopImg, tabletImg, mobileImg });
  useFetch(link, setPlanetsData, planetsData);

  useEffect(() => {
    if (!planet && planetsData) {
      navigate(`/destination/${planetsData[0].name.toLowerCase()}`);
    }
  }, [navigate, planet, planetsData]);

  useEffect(() => {
    if (planet && planetsData) {
      const current = planetsData.find((pl) => pl.name.toLowerCase() === planet);

      if (!current) {
        navigate('/not-found');
      }

      setCurrentPlanet(current);
    }
  }, [navigate, planet, planetsData]);

  return (
    <main className='page-container'>
      <Heading number={'01'} text={'PICK YOUR DESTINATION'} />

      {currentPlanet?.name && planet && (
        <div className='destination-content'>
          <div className='planet-image'>
            <img
              key={currentPlanet?.name}
              src={require(`../../assets/destination/image-${planet}.png`)}
              alt='planet'
            />
          </div>
          <div className='destination-details'>
            <nav className='destination-navbar'>
              <ul className='nav-text'>
                {planetsData.map((planet) => (
                  <li>
                    <NavLink key={planet.name} to={`/destination/${planet.name.toLowerCase()}`}>
                      {planet.name.toUpperCase()}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <h2>{currentPlanet?.name.toUpperCase()}</h2>
            <p>{currentPlanet?.description}</p>
            <div className='destination-values'>
              <div>
                <p className='sub-h2'>AVG. DISTANCE</p>
                <p className='sub-h1'>{currentPlanet?.distance.toUpperCase()}</p>
              </div>
              <div>
                <p className='sub-h2'>EST. TRAVEL TIME</p>
                <p className='sub-h1'>{currentPlanet?.travel.toUpperCase()}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Destination;
