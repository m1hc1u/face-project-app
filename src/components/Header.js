import React, { forwardRef, useRef} from 'react';
import FaceLogo from '../img/face-logo.svg';
import {NavLink} from 'react-router-dom';

const Header = () => {

    return (
        <header className='page-header'>
            <div className='header-full-menu'>
                <div className='logos-left'>
                    <a href="/public/index.html">
                        <NavLink to='/'>
                            <img className='face-logo' src={FaceLogo} alt='facé profile' />
                        </NavLink>
                    </a>
                    <div className="logo">
                        <NavLink to='/'>
                            <h1 className="logo-text">Facé</h1>
                        </NavLink>
                    </div>
                </div>
                <nav>
                    <ul className="navi">
                        <li className="navi-li"><NavLink to="/random-face">&nbsp;App&nbsp;</NavLink></li>
                        <li className="navi-li"><a href="#container-rd"> &nbsp;R&D&nbsp;</a></li>
                        <li className="navi-li"><a href="#container-contact-feedback">&nbsp;Feedback&nbsp;</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

const ResDev = () => {
    const resdevRef = useRef()

    function handleScrollClick() {
        resdevRef.current.scrollIntoView({ behavior: 'smooth'})
    }
    return
}

export default Header;