import {RECEIVE_CONTRIBUTION} from '../actions/contribution_actions';
import merge from 'lodash/merge';

const ContributionReducer = (state = {} ,action) =>{
  switch(action.type){
    case RECEIVE_CONTRIBUTION:
      return merge({}, state,action.contribution);
    default:
      return state;
  }
};

export default ContributionReducer;
