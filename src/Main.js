import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Preheader from './components/Preheader';
import Home from './components/Home';

function Main() {
  return (
      <Router>
        <div className="">
            <Preheader />
                <div className="container d-flex align-items-center flex-column">
                    <Switch>
                        <Route path="/reg" exact={true}>
                            <RegistrationForm />
                        </Route>
                        <Route path="/" exact={true}>
                            <Home />
                        </Route>
                    </Switch>
                </div>

        </div>
      </Router>
  );
}

export default Main;

