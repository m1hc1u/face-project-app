import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Preheader from './components/Preheader';
import Home from './components/Home';
import FacéApp from "./components/FacéApp";

function Main() {
  return (
      <Router>
        <div className="">
            <Preheader />
                <div className="container d-flex align-items-center flex-column">
                    <Switch>
                        <Route path="/registration" exact={true}>
                            <RegistrationForm />
                        </Route>
                        <Route path="/" exact={true}>
                            <Home />
                        </Route>
                        <Route path="/random-face" exact={true}>
                            <FacéApp />
                        </Route>
                    </Switch>
                </div>
        </div>
      </Router>
  );
}

export default Main;

