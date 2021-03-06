import React from 'react';
import { link, hashHistory, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';
import { fetchCampaigns } from '../../actions/campaign_actions';
import UserCampaignShow from './user_campaign_show';

const mapStateToProps = (state, { params }) => {
  let userCampaigns = [];
  Object.keys(state.campaigns).forEach( id =>
    { if (state.campaigns[id].user_id === parseInt(params.userId)) {
      userCampaigns.push(state.campaigns[id]);
    }});
  return ({campaigns: userCampaigns,
          user: state.user,
          currentUserId: state.session.currentUser.id});

  // .currentUser[ownProps.params.userId]
};

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  fetchCampaigns: () => dispatch(fetchCampaigns()),
  logout: id => dispatch(logout(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserCampaignShow);
