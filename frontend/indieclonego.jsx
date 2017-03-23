import React from 'react';
import ReactDOM from 'react-dom';
import * as Session from './actions/session_actions';
import * as User from './actions/user_actions';
import * as Reward from './actions/reward_actions';
import configureStore from './store/store';
import Root from './components/root';
import Modal from 'react-modal';

import * as UserAPIUtil from './util/user_api_util';
import * as CampaignAPIUtil from './util/campaign_api_util';
import * as RewardAPIUtil from './util/reward_api_util';

window.fetchUser = UserAPIUtil.fetchUser;
window.fetchUserAction = User.fetchUser;
window.fetchCampaigns = CampaignAPIUtil.fetchCampaigns;
window.fetchCampaign = CampaignAPIUtil.fetchCampaign;
window.fetchRewardsAction = Reward.fetchRewards;
window.fetchRewards = RewardAPIUtil.fetchRewards;
window.login = Session.login;
window.signup = Session.signup;
window.logout = Session.logout;

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.store = store;
  Modal.setAppElement(document.body);
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
