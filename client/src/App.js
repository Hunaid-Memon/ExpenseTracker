import React, { Fragment } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TrackerState from './context/tracker/TrackerState';
import AuthState from './context/auth/AuthState';
import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import AlertState from './context/alert/AlertState';
import Alert from './components/layouts/Alert'


const App = () => {
  return (
    <AuthState>
      <AlertState>
        <TrackerState>
          <Router>
            <Fragment>
              <Navbar />
              <div className="container">
                <Alert />
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </TrackerState>
      </AlertState>
    </AuthState>
  );
}

export default App;
