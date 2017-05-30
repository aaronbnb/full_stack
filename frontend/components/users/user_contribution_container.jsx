import React from 'react';
import { link, hashHistory, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';
import { fetchContributions } from '../../actions/contribution_actions';
import UserCampaignShow from './user_campaign_show';

const mapStateToProps = (state, { params }) => {
  let userContributions = [];
  Object.keys(state.contributions).forEach( id =>
    { if (state.contributions[id].user_id === parseInt(params.userId)) {
      userContributions.push(state.contributions[id]);
    }});
  return ({contributions: userContributions,
          user: state.user,
          currentUserId: state.session.currentUser.id});

  // .currentUser[ownProps.params.userId]
};

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  fetchContributions: () => dispatch(fetchContributions()),
  logout: id => dispatch(logout(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserCampaignShow);
