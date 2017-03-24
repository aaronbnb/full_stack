import React from 'react';
import { link, hashHistory, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';
import UserCampaignShow from './user_campaign_show';

const mapStateToProps = (state, ownProps) => {
  return ({campaigns: state.user.campaigns,
          user: state.user,
          currentUserId: state.session.currentUser.id});

  // .currentUser[ownProps.params.userId]
};

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  logout: id => dispatch(logout(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserCampaignShow);
