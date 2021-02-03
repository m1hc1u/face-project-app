import { ReactComponent as FaceLogo } from '../img/face-logo.svg';

const Header = () => {
    return (
        <header className='page-header'>
            <div className='header-full-menu'>
                <a href="/public/index.html">
                    <img className="face-logo">
                        { FaceLogo }
                        <FaceLogo />
                    </img>
                    {/*<img className='face-logo' src="" alt='facé profile' />*/}
                </a>
                <div className="logo">
                    <a href="/public/index.html">
                        <h1 className="logo-text">Facé</h1>
                    </a>
                </div>
                <nav>
                    <ul className="navi">
                        <li className="navi-li"><a href="#">&nbsp;App&nbsp;</a></li>
                        <li className="navi-li"><a href="#"> &nbsp;R&D&nbsp;</a></li>
                        <li className="navi-li"><a href="#">&nbsp;Feedback&nbsp;</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;