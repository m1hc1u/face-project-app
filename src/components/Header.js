import React, { forwardRef, useRef} from 'react';
import FaceLogo from '../img/face-logo.svg';
import FacéApp from '/src/components/FacéApp';

const Header = () => {

    return (
        <header className='page-header'>
            <div className='header-full-menu'>
                <div className='logos-left'>
                <a href="/public/index.html">
                    <img className='face-logo' src={FaceLogo} alt='facé profile' />
                </a>
                <div className="logo">
                    <a href="/public/index.html">
                        <h1 className="logo-text">Facé</h1>
                    </a>
                </div>
                </div>
                <nav>
                    <ul className="navi">
                        <li className="navi-li"><a onClick={FacéApp}>&nbsp;App&nbsp;</a></li>
                        <li className="navi-li"><a href="#"> &nbsp;R&D&nbsp;</a></li>
                        <li className="navi-li"><a href="#">&nbsp;Feedback&nbsp;</a></li>
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