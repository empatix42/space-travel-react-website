import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
import Logo from '../assets/shared/logo.svg';
import CloseMenuIcon from '../assets/shared/icon-close.svg';
import OpenMenuIcon from '../assets/shared/icon-hamburger.svg';
import './Header.css';

const Header = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [isMenuVisible, setisMenuVisible] = useState(false);

  const toggleMenuVisibility = () => {
    setisMenuVisible(!isMenuVisible);
  };

  useEffect(() => {
    if (isMobile) {
      setisMenuVisible(false);
    }
  }, [isMobile]);

  return (
    <header>
      <div className='header-content'>
        <img src={Logo} alt='space travel logo' />
      </div>
      {isMobile && (
        <button className='menu-icon' onClick={toggleMenuVisibility}>
          {isMenuVisible && <img src={CloseMenuIcon} alt='icon close menu' />}
          {!isMenuVisible && <img src={OpenMenuIcon} alt='icon open menu' />}
        </button>
      )}

      {isDesktop && <div className='separator'></div>}
      <nav
        className={[
          'navbar',
          isMobile ? 'navbar-mobile' : '',
          isMenuVisible ? 'navbar-visible' : '',
        ]
          .join(' ')
          .trim()}
      >
        <ul className='nav-text'>
          <li>
            <NavLink to='/'>{(isDesktop || isMobile) && <span>00</span>}HOME</NavLink>
          </li>
          <li>
            <NavLink to='/destination'>
              {(isDesktop || isMobile) && <span>01</span>}DESTINATION
            </NavLink>
          </li>
          <li>
            <NavLink to='/crew'>{(isDesktop || isMobile) && <span>02</span>}CREW</NavLink>
          </li>
          <li>
            <NavLink to='/technology'>
              {(isDesktop || isMobile) && <span>03</span>}TECHNOLOGY
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
