import {
  RECEIVE_CAMPAIGN,
  RECEIVE_CAMPAIGNS,
  RECEIVE_CAMPAIGN_ERRORS } from '../actions/campaign_actions';
import merge from 'lodash/merge';

const emptyCampaign = Object.freeze({
  currentUser: null,
  errors: []
});

const CampaignReducer = (state = emptyCampaign, action) => {
  Object.freeze(state);
  switch(action.type) {
    default:
      return state;
  }
};

// const CampaignReducer = (state = _nullUser, action) => {
//   Object.freeze(state);
//   switch(action.type) {
//     case RECEIVE_CURRENT_USER:
//       const currentUser = action.currentUser;
//       return merge({}, _nullUser, {
//         currentUser
//       });
//     case LOGOUT:
//       return merge({}, _nullUser);
//     case RECEIVE_ERRORS:
//       const errors = action.errors;
//       return merge({}, _nullUser, {
//         errors
//       });
//     default:
//       return state;
//   }
// };

export default CampaignReducer;
