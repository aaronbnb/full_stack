import React from 'react';
import { link, hashHistory, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchCampaign } from '../../actions/campaign_actions';
import { fetchUser } from '../../util/user_api_util';
import CampaignShow from './campaign_show';

const mapStateToProps = (state, ownProps) => {
    return ({
      currentUser: state.session.currentUser,
      campaign: state.campaigns[ownProps.params.campaignId],
      formType: 'view'
    });
  };

const mapDispatchToProps = dispatch => ({
  fetchCampaign: id => dispatch(fetchCampaign(id)),
  fetchUser: id => dispatch(fetchUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignShow);
