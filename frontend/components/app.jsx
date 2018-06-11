import React from 'react';
import { Provider } from 'react-redux';
import {Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import DashboardContainer from './dashboard/dashboard_container';
import LocationContainer from './location/location_container';
import RootPage from './home_page/root_page';
import Dashboard from './dashboard/dashboard';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <Modal />
    <header>
      <div className="header-wrapper">
        <h1 className='logo'>hospitium</h1>
        <GreetingContainer />
      </div>
    </header>
    <Switch>
      <ProtectedRoute exact path='/locations/:id' component={LocationContainer} />
      <ProtectedRoute exact path='/dashboard' component={DashboardContainer} />
      <AuthRoute exact path='/' component={RootPage} />
      <Redirect from="/*" to='/' />
    </Switch>
  </div>
);

export default App;
