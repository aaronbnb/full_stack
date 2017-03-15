import React from 'react';
import ReactDOM from 'react-dom';
import * as Session from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root';
import Modal from 'react-modal';

window.login = Session.login;
window.signup = Session.signup;
window.logout = Session.logout;

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  Modal.setAppElement(document.body);
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
