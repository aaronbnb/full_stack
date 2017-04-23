import {
  RECEIVE_CAMPAIGN,
  RECEIVE_CAMPAIGNS,
  RECEIVE_CONTRIBUTION,
  RECEIVE_CAMPAIGN_ERRORS,
  fetchCampaigns } from '../actions/campaign_actions';

import merge from 'lodash/merge';

const campaigns = fetchCampaigns();

const CampaignReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_CAMPAIGNS:
      return action.campaigns;
    case RECEIVE_CAMPAIGN:
      const newCampaign = {[action.campaign.id]: action.campaign};
      return merge({}, state, newCampaign);
    case RECEIVE_CONTRIBUTION:
    debugger;
      const contribution = action.contribution;
      newState[action.contribution.campaign_id].status += parseInt(action.contribution);
      return newState;
    case RECEIVE_CAMPAIGN_ERRORS:
      const errors = action.errors;
      return merge({}, state, {
        errors
      });
    default:
      return state;
  }
};

export default CampaignReducer;
