import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { replaceSpaces } from '../../utils/helpers';
import useBackgroundImage from '../../hooks/useBackgroundImage';
import desktopImg from '../../assets/crew/background-crew-desktop.jpg';
import tabletImg from '../../assets/crew/background-crew-tablet.jpg';
import mobileImg from '../../assets/crew/background-crew-mobile.jpg';
import Heading from '../../components/Heading';
import useFetch from '../../hooks/useFetch';
import './Crew.css';

const Crew = () => {
  const link = 'http://localhost:8000/crew';
  const { member } = useParams();
  const navigate = useNavigate();

  const [crewData, setCrewData] = useState(null);
  const [crewMember, setCrewMember] = useState(null);

  useBackgroundImage({ desktopImg, tabletImg, mobileImg });
  useFetch(link, setCrewData, crewData);

  useEffect(() => {
    if (!member && crewData) {
      navigate(`/crew/${replaceSpaces(crewData[0].role, '_')}`);
    }
  }, [navigate, member, crewData]);

  useEffect(() => {
    if (member && crewData) {
      const current = crewData.find((m) => replaceSpaces(m.role, '_') === member);

      if (!current) {
        navigate('/not-found');
      }

      setCrewMember(current);
    }
  }, [navigate, member, crewData]);

  return (
    <main className='page-container'>
      <Heading number={'02'} text={'MEET YOUR CREW'} />

      {crewMember && (
        <>
          <div className='crew-content'>
            <div className='crew-details'>
              <div>
                <h4 className='crew-role sub-h1'>{crewMember.role.toUpperCase()}</h4>
                <h3>{crewMember.name.toUpperCase()}</h3>
                <p>{crewMember.bio}</p>
              </div>
              <nav className='crew-navbar'>
                <ul>
                  {crewData.map((member) => (
                    <li key={member.name}>
                      <NavLink to={`/crew/${replaceSpaces(member.role, '_')}`}>
                        <span className='navbar-dot'>•</span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className='crew-image'>
              <img
                key={crewMember?.name}
                src={require(`../../assets/crew/image-${replaceSpaces(crewMember.name, '-')}.png`)}
                alt='crew member'
              />
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default Crew;
