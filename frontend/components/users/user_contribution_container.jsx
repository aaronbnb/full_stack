import React from 'react';
import { link, hashHistory, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';
import { fetchContributions } from '../../actions/contribution_actions';
import { fetchCampaign, fetchCampaigns } from '../../actions/campaign_actions';
import UserContributionShow from './user_contribution_show';

const mapStateToProps = (state, { params }) => {
  return ({contributions: state.user.contributions,
          user: state.user,
          currentUser: state.session.currentUser});
};

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  fetchContributions: () => dispatch(fetchContributions()),
  fetchCampaigns: () => dispatch(fetchCampaigns()),
  fetchCampaign: id => dispatch(fetchCampaign(id)),
  logout: id => dispatch(logout(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContributionShow);
