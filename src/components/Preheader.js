import React from 'react';
import RegistrationForm from './RegistrationForm';
import { BrowserRouter, Route, Link } from "react-router-dom";

const Preheader = () => {
    return (
        <div className="pre-header-msg">
            <div className="pre-header-msg--txt">Do you want to use our app?</div>
            {/*kliknij, aby otworzyć panel rejestracji*/}
            <a className="pre-header-msg--btn h3" onClick={RegistrationForm}>Register now</a>
        </div>
    );
}

export default Preheader;