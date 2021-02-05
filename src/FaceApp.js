import React from 'react';
import FaceLogo from "./img/face-logo.svg";

function FaceApp() {
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
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default FaceApp;