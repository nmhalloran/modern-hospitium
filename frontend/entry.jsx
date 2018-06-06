import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root';
import { login, signup, logout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    debugger
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      errors: {
        session: []
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    debugger
    store = configureStore();
  }
  console.log(window.currentUser);
  //TESTING START
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //TESTING END

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
