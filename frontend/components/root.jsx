import React from 'react';
import { Provider } from 'react-redux';

//react router, won't be using browserHistory
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session/session_form_container';
import UserContainer from './users/user_container';
import UserFormContainer from './users/user_form_container';
import UserShowContainer from './users/user_show_container';
import CampaignFormContainer from './campaigns/campaign_form_container';
import RewardFormContainer from './rewards/reward_form_container';
import CampaignIndexContainer from './campaigns/campaign_index_container';
import CampaignShowContainer from './campaigns/campaign_show_container';

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={CampaignIndexContainer}/>
          <Route path="login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="users/:userId" component={UserContainer} onEnter={_ensureLoggedIn}>
            <IndexRoute component={UserShowContainer}  onEnter={_ensureLoggedIn}/>
            <Route path="edit" component={UserFormContainer} onEnter={_ensureLoggedIn}/>
          </Route>
          <Route path="campaigns/:campaignId" component={CampaignShowContainer}/>

          <Route path="campaigns/:campaignId/rewards" component={RewardFormContainer} onEnter={_ensureLoggedIn}/>
          <Route path="campaigns" component={CampaignFormContainer} onEnter={_ensureLoggedIn}/>

        </Route>
      </Router>
    </Provider>
  );
};


export default Root;
// <Route path="/login" component={ SessionFormContainer } />
// <Route path="/signup" component={ SessionFormContainer } />
