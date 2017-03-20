import React from 'react';
import ReactDOM from 'react-dom';
import * as Session from './actions/session_actions';
import * as User from './actions/user_actions';
import configureStore from './store/store';
import Root from './components/root';
import Modal from 'react-modal';

import * as UserAPIUtil from './util/user_api_util';

window.fetchUser = UserAPIUtil.fetchUser;
window.fetchUserAction = User.fetchUser;
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
