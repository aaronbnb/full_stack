import {
  RECEIVE_CAMPAIGN,
  RECEIVE_CAMPAIGNS,
  RECEIVE_CONTRIBUTION,
  RECEIVE_CAMPAIGN_ERRORS } from '../actions/campaign_actions';
import merge from 'lodash/merge';

const defaultState = {
                          campaign: {
                          title: "",
                          description: "",
                          overview: "",
                          category_id: 0,
                          main_img_url: "",
                          user_id: 0,
                          goal: 0,
                          status: 0,
                          duration: 30
                        }
                      };

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
