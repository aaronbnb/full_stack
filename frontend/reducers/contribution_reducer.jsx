import {RECEIVE_CONTRIBUTION, RECEIVE_CONTRIBUTIONS } from '../actions/contribution_actions';
import merge from 'lodash/merge';

const ContributionReducer = (state = {} ,action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CONTRIBUTION:
      return merge({}, state, action.contribution);
    case RECEIVE_CONTRIBUTIONS:
      return action.contributions;
    default:
      return state;
  }
};

export default ContributionReducer;
