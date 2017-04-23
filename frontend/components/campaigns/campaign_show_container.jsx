import React from 'react';
import { link, hashHistory, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchCampaign } from '../../actions/campaign_actions';
import { fetchUser } from '../../actions/user_actions';
import { fetchRewards } from '../../actions/reward_actions';
import CampaignShow from './campaign_show';

const mapStateToProps = (state, ownProps) => {
    let userRewards = (state.campaigns[ownProps.params.campaignId]) ? state.campaigns[ownProps.params.campaignId].rewards : [];
    return ({
      currentUser: state.session.currentUser,
      campaign: state.campaigns[ownProps.params.campaignId],
      formType: 'view',
      rewards: userRewards,
      amount: 0
    });
  };

const mapDispatchToProps = dispatch => ({
  fetchCampaign: id => dispatch(fetchCampaign(id)),
  fetchUser: id => dispatch(fetchUser(id)),
  fetchRewards: id => dispatch(fetchRewards(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignShow);
