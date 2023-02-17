import React from 'react';
import './Header.scss'
import logo from '../images/olx-logo.png';
import Container from '../../utils/Container';
import { useLocation , Link } from 'react-router-dom';
import {FiHeart, FiMessageCircle, FiUser} from 'react-icons/fi'
import { RedirectButton } from '../../utils/Components';

const Header = () => {

    const location = useLocation();


    return location.pathname === '/auth' ? <></> : (
        <header>
            <Container>
                <div className='header-wrapper' key="header">
                    <img className='header__logo' src={logo} alt="logo-img" />
                    <nav>
                        <ul className="language-select">
                            <li>O'Z</li>
                            |
                            <li>RU</li>                            
                        </ul>
                        <Link to="/message" className='header-nav__link'>
                            <FiMessageCircle/>Xabarlar
                        </Link>
                        <Link to="/wishlist" className='header-nav__link'>
                            <FiHeart/>
                        </Link>
                        <Link to="/auth" className='header-nav__link'>
                            <FiUser/>Xisobingiz
                        </Link>
                        <RedirectButton redirect="/create-new/" title="E'lon berish" type="light" />
                    </nav>
                </div>
            </Container>
        </header>
    );
};

export default Header;