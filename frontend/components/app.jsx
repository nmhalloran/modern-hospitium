import React from 'react';
import { Provider } from 'react-redux';
import {Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <div className="header-wrapper">
        <h1>MODERN HOSPITIUM</h1>
        <GreetingContainer />
      </div>
    </header>
    <section className="mod-join">
      <h2 className="big-text over-face">
        Stay with Local and Meet Travelers
      </h2>
      <h3 className="mod-join-sub">
        Share Authentic Travel Experiences
      </h3>
    </section>
    <section className="mod-testimonials image-overlay">
      <h2 className="big-text in-testimonial">
        Why Join?
      </h2>
      <hr className="mod-short mod-white" />
    </section>
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
