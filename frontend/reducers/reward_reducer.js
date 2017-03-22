import {
  RECEIVE_CAMPAIGN_REWARD,
  RECEIVE_CAMPAIGN_REWARDS
} from '../actions/reward_actions';
import merge from 'lodash/merge';


const RewardReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CAMPAIGN_REWARD:
    const newReward = {[action.reward.id]: action.reward};
    return merge({}, state, newReward);
    case RECEIVE_CAMPAIGN_REWARDS:
      return action.rewards;
    default:
      return state;
  }
};

export default RewardReducer;
