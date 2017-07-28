import React from 'react';
import { link, hashHistory, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';
import { fetchContributions } from '../../actions/contribution_actions';
import { fetchCampaign, fetchCampaigns } from '../../actions/campaign_actions';
import UserContributionListItem from './user_contribution_list_item';

const mapStateToProps = (state, params) => {
  return({
    contribution: params.contribution,
    campaign: state.campaigns[params.contribution.campaign_id]
  });
};

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  fetchCampaign: (id) => dispatch(fetchCampaign(id)),
  logout: id => dispatch(logout(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContributionListItem);
