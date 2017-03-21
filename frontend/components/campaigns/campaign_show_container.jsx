import React from 'react';
import { link, hashHistory, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchCampaign } from '../../actions/campaign_actions';
import { fetchUser } from '../../util/user_api_util';
import CampaignShow from './campaign_show';

const mapStateToProps = (state, ownProps) => {
  const campaign_creator = fetchUser(state.campaigns[ownProps.params.campaignId].user_id);
  if (state.session.currentUser.id === parseInt(state.campaigns[ownProps.params.campaignId].user_id)) {
    return ({currentUser: state.session.currentUser,
            campaign: state.campaigns[ownProps.params.campaignId],
            formType: 'edit',
            user: campaign_creator });
  } else {
    return ({
      currentUser: state.session.currentUser,
      campaign: state.campaigns[ownProps.params.campaignId],
      formType: 'view',
      user: campaign_creator 
    });
  }

  // .currentUser[ownProps.params.userId]
};

const mapDispatchToProps = dispatch => ({
  fetchCampaign: id => dispatch(fetchCampaign(id)),
  fetchUser: id => dispatch(fetchUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignShow);
